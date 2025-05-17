import React from 'react';
import { Product } from '../types';
import { formatCurrency } from '../utils/calculationUtils';
import { BarChartHorizontal, DollarSign, TrendingUp } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  isActive: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isActive }) => {
  const marginPercentage = ((product.price - product.cost) / product.price) * 100;
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-200 ${
        isActive ? 'ring-2 ring-blue-500 transform scale-102' : 'hover:shadow-lg'
      }`}
      onClick={() => onClick(product)}
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center">
        {product.imageUrl ? (
          <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">Imagem não disponível</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.category}</p>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-4 w-4 text-blue-500" />
            <span className="font-medium">{formatCurrency(product.price)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChartHorizontal className="h-4 w-4 text-teal-600" />
            <span className="font-medium">Custo: {formatCurrency(product.cost)}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-medium">Margem Base:</span>
            </div>
            <span className="text-sm font-semibold text-orange-600">
              {marginPercentage.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full" 
              style={{ width: `${Math.min(marginPercentage, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;