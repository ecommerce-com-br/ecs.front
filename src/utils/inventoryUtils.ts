import { Product, InventoryStatus } from '../types';



// verificar tbm os caclculos de estoques com os cara dps 
export const calculateAverageDailySales = (salesHistory: { date: string; quantity: number }[]): number => {
  const totalSales = salesHistory.reduce((sum, sale) => sum + sale.quantity, 0);
  return totalSales / salesHistory.length;
};

export const calculateDaysUntilReorder = (
  currentStock: number,
  reorderPoint: number,
  averageDailySales: number
): number => {
  if (averageDailySales === 0) return Infinity;
  return Math.floor((currentStock - reorderPoint) / averageDailySales);
};

export const getInventoryStatus = (product: Product): InventoryStatus => {
  const averageDailySales = calculateAverageDailySales(product.inventory.salesHistory);
  const daysUntilReorder = calculateDaysUntilReorder(
    product.inventory.currentStock,
    product.inventory.reorderPoint,
    averageDailySales
  );

  let status: 'critical' | 'warning' | 'good';
  if (daysUntilReorder <= 3) {
    status = 'critical';
  } else if (daysUntilReorder <= 7) {
    status = 'warning';
  } else {
    status = 'good';
  }

  return {
    daysUntilReorder,
    averageDailySales,
    status
  };
};