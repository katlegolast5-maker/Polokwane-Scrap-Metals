import React from 'react';
import { Helmet } from 'react-helmet-async';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { db, auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogIn, LogOut, Package, MessageSquare, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function Admin() {
  const [user, setUser] = React.useState(auth.currentUser);
  const [quotes, setQuotes] = React.useState<any[]>([]);
  const [contacts, setContacts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [unauthorized, setUnauthorized] = React.useState(false);

  React.useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((u) => {
      setUser(u);
      if (!u) {
        setUnauthorized(false);
      }
    });
    return () => unsubscribeAuth();
  }, []);

  React.useEffect(() => {
    if (!user) return;

    setUnauthorized(false);

    const quotesQuery = query(collection(db, 'quotes'), orderBy('createdAt', 'desc'));
    const unsubscribeQuotes = onSnapshot(quotesQuery, (snapshot) => {
      setQuotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }, (error) => {
      console.error("Quotes fetch error:", error);
      if (error.code === 'permission-denied') {
        setUnauthorized(true);
      }
    });

    const contactsQuery = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
    const unsubscribeContacts = onSnapshot(contactsQuery, (snapshot) => {
      setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }, (error) => {
      console.error("Contacts fetch error:", error);
      if (error.code === 'permission-denied') {
        setUnauthorized(true);
      }
      setLoading(false);
    });

    return () => {
      unsubscribeQuotes();
      unsubscribeContacts();
    };
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  if (!user || unauthorized) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center bg-[#F5F3EE]">
        <Card className="max-w-md w-full rounded-none border-2 border-[#1A1D21] shadow-[10px_10px_0px_#D2691E] p-12 text-center">
          <LayoutDashboard size={64} className="mx-auto mb-6 text-[#1A1D21]" />
          <h1 className="text-3xl font-black uppercase italic font-display mb-4">
            {unauthorized ? "Access Denied" : "Admin Access"}
          </h1>
          <p className="text-black/60 mb-8 font-medium">
            {unauthorized 
              ? "Your account is not authorized to access this dashboard. Contact the system administrator." 
              : "Please sign in with an authorized account to manage recycling leads."}
          </p>
          {unauthorized ? (
            <Button onClick={handleLogout} className="w-full h-14 bg-[#1A1D21] text-white rounded-none uppercase font-black tracking-widest">
              Sign Out & Try Another
            </Button>
          ) : (
            <Button onClick={handleLogin} className="w-full h-14 bg-[#1A1D21] text-white rounded-none uppercase font-black tracking-widest flex items-center justify-center gap-2">
              <LogIn size={20} /> Sign In with Google
            </Button>
          )}
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 bg-paper min-h-screen">
      <Helmet>
        <title>Admin Dashboard | Polokwane Scrap Metals</title>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 border-b-2 border-ebony pb-10">
          <div className="space-y-4">
            <span className="text-brand font-black uppercase tracking-[0.4em] text-sm italic">Site Administration</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter italic font-industrial leading-none text-ebony">
              Lead <span className="text-brand">Desk</span>
            </h1>
          </div>
          <div className="flex items-center gap-6 bg-white p-4 border-2 border-ebony shadow-[8px_8px_0px_#1A1D21]">
            <img src={user.photoURL || ''} alt="avatar" className="w-12 h-12 grayscale" />
            <div className="hidden sm:block">
              <p className="text-sm font-black uppercase italic font-industrial tracking-widest">{user.displayName}</p>
              <p className="text-[10px] font-bold text-slate uppercase tracking-tighter">{user.email}</p>
            </div>
            <Button variant="ghost" onClick={handleLogout} className="p-3 hover:bg-brand/10 rounded-none border-l-2 border-ebony/10">
              <LogOut size={24} className="text-ebony" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="bg-transparent border-ebony w-full justify-start rounded-none h-auto p-0 mb-12 flex gap-4">
            <TabsTrigger 
              value="quotes" 
              className="px-12 py-5 rounded-none border-2 border-ebony data-[state=active]:bg-ebony data-[state=active]:text-paper text-xs font-black uppercase tracking-widest transition-all"
            >
              Requests ({quotes.length})
            </TabsTrigger>
            <TabsTrigger 
              value="contacts" 
              className="px-12 py-5 rounded-none border-2 border-ebony data-[state=active]:bg-ebony data-[state=active]:text-paper text-xs font-black uppercase tracking-widest transition-all"
            >
              Messages ({contacts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quotes">
            <div className="border-2 border-ebony bg-white overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
              <Table>
                <TableHeader className="bg-ebony">
                  <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Date / Time</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Identity</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Connect</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Materials</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest text-right">Mass</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {quotes.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-32 text-slate font-black uppercase italic font-industrial text-2xl opacity-20">Secure Queue Empty</TableCell>
                    </TableRow>
                  ) : quotes.map((q) => (
                    <TableRow key={q.id} className="border-b border-ebony/5 hover:bg-slate/5 transition-colors">
                      <TableCell className="text-[10px] font-bold text-slate uppercase">
                        {q.createdAt?.toDate ? q.createdAt.toDate().toLocaleString() : 'Recent Transmission'}
                      </TableCell>
                      <TableCell className="font-black uppercase italic font-industrial text-lg text-ebony">{q.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-black tracking-widest text-ebony">{q.phone}</span>
                          {q.whatsappOptIn && <span className="text-[8px] font-black uppercase bg-[#25D366] text-white w-fit px-1">WA Active</span>}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {q.metalTypes?.map((m: string) => (
                            <span key={m} className="text-[9px] font-black uppercase border border-ebony/20 px-2 py-0.5">{m}</span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex flex-col items-end">
                          <span className="font-black text-lg italic font-industrial">{q.estimatedWeight}<span className="text-brand text-xs ml-1">KG</span></span>
                          <span className={`text-[8px] font-black uppercase px-2 py-0.5 ${q.serviceType === 'Collection' ? 'bg-brand text-white' : 'bg-slate/20 text-ebony'}`}>
                            {q.serviceType}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="contacts">
             <div className="border-2 border-ebony bg-white overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.05)]">
              <Table>
                <TableHeader className="bg-ebony">
                  <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Timestamp</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Origin</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Terminal</TableHead>
                    <TableHead className="text-paper font-black uppercase italic font-industrial py-6 tracking-widest">Transmission Payload</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-32 text-slate font-black uppercase italic font-industrial text-2xl opacity-20">Buffer Clear</TableCell>
                    </TableRow>
                  ) : contacts.map((c) => (
                    <TableRow key={c.id} className="border-b border-ebony/5 hover:bg-slate/5 transition-colors">
                      <TableCell className="text-[10px] font-bold text-slate uppercase">
                         {c.createdAt?.toDate ? c.createdAt.toDate().toLocaleString() : 'Buffer Stream'}
                      </TableCell>
                      <TableCell className="font-black uppercase italic font-industrial text-lg text-ebony">{c.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-xs font-black tracking-widest text-ebony">{c.phone}</span>
                          <span className="text-[10px] font-bold text-slate lowercase">{c.email}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-6">
                        <p className="text-xs font-bold leading-relaxed text-ebony italic bg-slate/5 p-4 border-l-2 border-brand">
                          {c.message}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
