import { Product } from "../types";





// produtos teste  dados do bling teram essa forma parecida de objeto 
export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "teste1",
    price: 79.99,
    cost: 24.99,
    weight: 0.2,
    dimensions: {
      length: 5,
      width: 5,
      height: 2
    },
    category: "teste1",
    imageUrl: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inventory: {
      currentStock: 45,
      reorderPoint: 20,
      lastRestockDate: "2025-02-01",
      salesHistory: [
        { date: "2025-03-01", quantity: 5 },
        { date: "2025-03-02", quantity: 3 },
        { date: "2025-03-03", quantity: 4 },
        { date: "2025-03-04", quantity: 6 },
        { date: "2025-03-05", quantity: 4 }
      ]
    }
  },
  {
    id: "prod-2",
    name: "teste2",
    price: 49.99,
    cost: 12.50,
    weight: 0.1,
    dimensions: {
      length: 10,
      width: 8,
      height: 1
    },
    category: "teste2",
    imageUrl: "https://images.pexels.com/photos/2079451/pexels-photo-2079451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inventory: {
      currentStock: 15,
      reorderPoint: 25,
      lastRestockDate: "2025-02-15",
      salesHistory: [
        { date: "2025-03-01", quantity: 8 },
        { date: "2025-03-02", quantity: 6 },
        { date: "2025-03-03", quantity: 7 },
        { date: "2025-03-04", quantity: 5 },
        { date: "2025-03-05", quantity: 8 }
      ]
    }
  },
  {
    id: "prod-3",
    name: "teste4",
    price: 19.99,
    cost: 4.25,
    weight: 0.3,
    dimensions: {
      length: 8,
      width: 8,
      height: 10
    },
    category: "teste3",
    imageUrl: "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inventory: {
      currentStock: 120,
      reorderPoint: 50,
      lastRestockDate: "2025-02-10",
      salesHistory: [
        { date: "2025-03-01", quantity: 12 },
        { date: "2025-03-02", quantity: 15 },
        { date: "2025-03-03", quantity: 10 },
        { date: "2025-03-04", quantity: 14 },
        { date: "2025-03-05", quantity: 11 }
      ]
    }
  },
  {
    id: "prod-4",
    name: "teste5",
    price: 24.99,
    cost: 6.75,
    weight: 0.2,
    dimensions: {
      length: 30,
      width: 20,
      height: 1
    },
    category: "teste5",
    imageUrl: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inventory: {
      currentStock: 85,
      reorderPoint: 40,
      lastRestockDate: "2025-02-20",
      salesHistory: [
        { date: "2025-03-01", quantity: 7 },
        { date: "2025-03-02", quantity: 9 },
        { date: "2025-03-03", quantity: 8 },
        { date: "2025-03-04", quantity: 6 },
        { date: "2025-03-05", quantity: 8 }
      ]
    }
  },
  {
    id: "prod-5",
    name: "teste6",
    price: 34.99,
    cost: 9.99,
    weight: 1.0,
    dimensions: {
      length: 180,
      width: 60,
      height: 0.5
    },
    category: "teste6",
    imageUrl: "",
    inventory: {
      currentStock: 25,
      reorderPoint: 15,
      lastRestockDate: "2025-02-05",
      salesHistory: [
        { date: "2025-03-01", quantity: 3 },
        { date: "2025-03-02", quantity: 2 },
        { date: "2025-03-03", quantity: 4 },
        { date: "2025-03-04", quantity: 3 },
        { date: "2025-03-05", quantity: 3 }
      ]
    }
  },
  {
    id: "prod-6",
    name: "teste7",
    price: 129.99,
    cost: 45.00,
    weight: 0.15,
    dimensions: {
      length: 4.5,
      width: 4,
      height: 1.2
    },
    category: "teste7",
    imageUrl: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    inventory: {
      currentStock: 18,
      reorderPoint: 20,
      lastRestockDate: "2025-02-25",
      salesHistory: [
        { date: "2025-03-01", quantity: 4 },
        { date: "2025-03-02", quantity: 5 },
        { date: "2025-03-03", quantity: 3 },
        { date: "2025-03-04", quantity: 4 },
        { date: "2025-03-05", quantity: 5 }
      ]
    }
  }
];