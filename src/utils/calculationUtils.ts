import { Product, Marketplace, Comparison } from "../types";


//verificar os calculos corretos com os caras dps 



export const calculateShippingCost = (product: Product, marketplace: Marketplace): number => {
  const { weight } = product;
  const { shippingRates } = marketplace;
  
  return shippingRates.base + (weight * shippingRates.perKg);
};

export const calculateFees = (product: Product, marketplace: Marketplace): number => {
  const { price } = product;
  const { commissionRate, baseFee } = marketplace;
  
  return (price * commissionRate) + baseFee;
};

export const calculateTaxes = (product: Product, marketplace: Marketplace): number => {
  const { price } = product;
  const { taxRate } = marketplace;
  
  return price * taxRate;
};

export const calculateNetProfit = (
  product: Product, 
  marketplace: Marketplace,
  shippingCost: number,
  fees: number,
  taxes: number
): number => {
  const { price, cost } = product;
  
  return price - cost - shippingCost - fees - taxes;
};

export const calculateProfitMargin = (netProfit: number, price: number): number => {
  return (netProfit / price) * 100;
};

export const getRecommendation = (profitMargin: number): 'best' | 'good' | 'average' | 'poor' => {
  if (profitMargin >= 30) return 'best';
  if (profitMargin >= 20) return 'good';
  if (profitMargin >= 10) return 'average';
  return 'poor';
};

export const compareMarketplaces = (product: Product, marketplaces: Marketplace[]): Comparison[] => {
  const comparisons = marketplaces.map(marketplace => {
    const shippingCost = calculateShippingCost(product, marketplace);
    const fees = calculateFees(product, marketplace);
    const taxes = calculateTaxes(product, marketplace);
    const netProfit = calculateNetProfit(product, marketplace, shippingCost, fees, taxes);
    const profitMargin = calculateProfitMargin(netProfit, product.price);
    
    return {
      product,
      marketplace,
      sellingPrice: product.price,
      fees,
      shipping: shippingCost,
      taxes,
      netProfit,
      profitMargin,
      recommendation: getRecommendation(profitMargin)
    };
  });
  
  return comparisons.sort((a, b) => b.netProfit - a.netProfit);
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);
};