import { Marketplace } from "../types";
import { ShoppingBag, Store, ShoppingCart, Package } from "lucide-react";

export const marketplaces: Marketplace[] = [
  {
    id: "amazon",
    name: "Amazon",
    logo: "amazon",
    commissionRate: 0.15,
    baseFee: 0.99,
    shippingRates: {
      base: 3.99,
      perKg: 1.99
    },
    taxRate: 0.09,
    popularity: 10
  },
  {
    id: "ebay",
    name: "eBay",
    logo: "ebay",
    commissionRate: 0.12,
    baseFee: 0.35,
    shippingRates: {
      base: 2.99,
      perKg: 1.49
    },
    taxRate: 0.08,
    popularity: 8
  },
  {
    id: "etsy",
    name: "Etsy",
    logo: "etsy",
    commissionRate: 0.065,
    baseFee: 0.20,
    shippingRates: {
      base: 3.49,
      perKg: 1.79
    },
    taxRate: 0.07,
    popularity: 7
  },
  {
    id: "shopify",
    name: "Shopify",
    logo: "shopify",
    commissionRate: 0.029,
    baseFee: 29.99,
    shippingRates: {
      base: 4.99,
      perKg: 2.49
    },
    taxRate: 0.08,
    popularity: 9
  }
];

export const getMarketplaceLogo = (id: string) => {
  switch (id) {
    case "amazon":
      return ShoppingCart;
    case "ebay":
      return ShoppingBag;
    case "etsy":
      return Package;
    case "shopify":
      return Store;
    default:
      return ShoppingBag;
  }
};