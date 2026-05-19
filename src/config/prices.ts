/**
 * Polokwane Scrap Metals - Live Price Configuration
 * Prices are in R/kg (South African Rand per Kilogram)
 */

export interface MetalPrice {
  id: string;
  name: string;
  price: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  category: 'ferrous' | 'non-ferrous' | 'e-waste';
  description: string;
  examples: string[];
}

export const METAL_PRICES: MetalPrice[] = [
  {
    id: 'copper-bright',
    name: 'Copper (Bright Wire)',
    price: 135.50,
    unit: 'kg',
    trend: 'up',
    category: 'non-ferrous',
    description: 'Clean, stripped bright copper wire.',
    examples: ['House wiring', 'Electrical cables']
  },
  {
    id: 'copper-mixed',
    name: 'Copper (Mixed/Heavy)',
    price: 118.00,
    unit: 'kg',
    trend: 'stable',
    category: 'non-ferrous',
    description: 'Mixed copper, plumbing pipes, or heavy pieces.',
    examples: ['Water pipes', 'Boiler tanks']
  },
  {
    id: 'brass',
    name: 'Brass',
    price: 78.50,
    unit: 'kg',
    trend: 'up',
    category: 'non-ferrous',
    description: 'Clean brass taps, ornaments, and fittings.',
    examples: ['Taps', 'Door handles', 'Shell casings']
  },
  {
    id: 'aluminium-ext',
    name: 'Aluminium (Extrusion)',
    price: 24.50,
    unit: 'kg',
    trend: 'stable',
    category: 'non-ferrous',
    description: 'Clean aluminium window frames and doors.',
    examples: ['Window frames', 'Door sections']
  },
  {
    id: 'aluminium-cans',
    name: 'Aluminium (Cans)',
    price: 14.00,
    unit: 'kg',
    trend: 'up',
    category: 'non-ferrous',
    description: 'Clean beverage cans.',
    examples: ['Soda cans', 'Beer cans']
  },
  {
    id: 'stainless-304',
    name: 'Stainless Steel (304)',
    price: 18.20,
    unit: 'kg',
    trend: 'down',
    category: 'non-ferrous',
    description: 'High-grade stainless steel sinks and cookware.',
    examples: ['Sinks', 'Kitchenware', 'Tableware']
  },
  {
    id: 'lead',
    name: 'Lead',
    price: 22.00,
    unit: 'kg',
    trend: 'stable',
    category: 'non-ferrous',
    description: 'Soft lead pipe, flashings, and weights.',
    examples: ['Roof flashing', 'Wheel weights']
  },
  {
    id: 'steel-heavy',
    name: 'Steel (Heavy/HMS)',
    price: 4.80,
    unit: 'kg',
    trend: 'up',
    category: 'ferrous',
    description: 'Industrial heavy melting steel.',
    examples: ['I-beams', 'Heavy machinery', 'Truck parts']
  },
  {
    id: 'steel-light',
    name: 'Steel (Light/Mixed)',
    price: 2.50,
    unit: 'kg',
    trend: 'stable',
    category: 'ferrous',
    description: 'Light mixed steel and tin.',
    examples: ['Roofing sheets', 'White goods', 'Car bodies']
  }
];

export const CONTACT_INFO = {
  phone: '015 297 1234',
  whatsapp: '27712345678',
  email: 'info@polokwanescrap.co.za',
  address: '123 Silicon Street, Ladine, Polokwane, 0699',
  hours: {
    weekdays: '08:00 - 17:00',
    saturday: '08:00 - 13:00',
    sunday: 'Closed'
  }
};
