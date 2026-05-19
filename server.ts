import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  app.use(express.json());

  // API Route: Quote Submission
  app.post("/api/quotes", async (req, res) => {
    try {
      const { 
        metalTypes, 
        estimatedWeight, 
        location, 
        serviceType, 
        name, 
        phone, 
        whatsappOptIn,
        preferredTime,
        additionalInfo
      } = req.body;

      console.log("New Quote Request:", req.body);

      // Email notification using Resend (optional - requires API key)
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        try {
          await resend.emails.send({
            from: 'PSM Website <onboarding@resend.dev>',
            to: ['katakicmatlou@gmail.com'], // User's email from metadata as recipient for now
            subject: `New Quote Request: ${name} (${serviceType})`,
            html: `
              <h1>New Scrap Quote Request</h1>
              <p><strong>Customer:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>WhatsApp Opt-in:</strong> ${whatsappOptIn ? "Yes" : "No"}</p>
              <p><strong>Metal Types:</strong> ${metalTypes.join(", ")}</p>
              <p><strong>Est. Weight:</strong> ${estimatedWeight} kg</p>
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Service:</strong> ${serviceType}</p>
              <p><strong>Preferred Time:</strong> ${preferredTime}</p>
              <p><strong>Info:</strong> ${additionalInfo || "None"}</p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
        }
      }

      // Success response
      return res.status(201).json({ 
        success: true, 
        id: Math.random().toString(36).substr(2, 9),
        message: "Quote received successfully." 
      });
    } catch (error) {
      console.error("Error processing quote:", error);
      return res.status(500).json({ error: "Failed to process quote request." });
    }
  });

  // API Route: Live Prices
  app.get("/api/prices", (req, res) => {
    // In a real app, this might fetch from a DB or external API
    res.json({ status: "ok", lastUpdated: new Date() });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Correctly handle index.html resolution in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PSM Server running on http://localhost:${PORT}`);
  });
}

startServer();
