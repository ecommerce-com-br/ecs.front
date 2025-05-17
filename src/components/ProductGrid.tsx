import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
  selectedProductId: string | null;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onProductSelect,
  selectedProductId
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={onProductSelect}
          isActive={selectedProductId === product.id}
        />
      ))}
    </div>
  );
};

export default ProductGrid;