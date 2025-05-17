export interface Product {
  id: string;
  name: string;
  price: number;
  cost: number;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  category: string;
  imageUrl: string;
  inventory: {
    currentStock: number;
    reorderPoint: number;
    lastRestockDate: string;
    salesHistory: {
      date: string;
      quantity: number;
    }[];
  };
}

export interface Marketplace {
  id: string;
  name: string;
  logo: string;
  commissionRate: number;
  baseFee: number;
  shippingRates: {
    base: number;
    perKg: number;
  };
  taxRate: number;
  popularity: number; 
}

export interface Comparison {
  product: Product;
  marketplace: Marketplace;
  sellingPrice: number;
  fees: number;
  shipping: number;
  taxes: number;
  netProfit: number;
  profitMargin: number;
  recommendation: 'best' | 'good' | 'average' | 'poor';
}

export interface InventoryStatus {
  daysUntilReorder: number;
  averageDailySales: number;
  status: 'critical' | 'warning' | 'good';
}