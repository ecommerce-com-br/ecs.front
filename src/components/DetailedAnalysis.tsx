import React from 'react';
import { Comparison } from '../types';
import { formatCurrency, formatPercentage } from '../utils/calculationUtils';
import { PieChart, DollarSign, Truck, Receipt, TrendingUp, Building } from 'lucide-react';

interface DetailedAnalysisProps {
  comparison: Comparison | null;
}

const DetailedAnalysis: React.FC<DetailedAnalysisProps> = ({ comparison }) => {
  if (!comparison) {
    return null;
  }

  const { product, marketplace, sellingPrice, fees, shipping, taxes, netProfit, profitMargin } = comparison;
  const costOfProduct = product.cost;

  const total = sellingPrice;
  const costPercent = (costOfProduct / total) * 100;
  const feesPercent = (fees / total) * 100;
  const shippingPercent = (shipping / total) * 100;
  const taxesPercent = (taxes / total) * 100;
  const profitPercent = (netProfit / total) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Análise Detalhada para {marketplace.name}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Preço de Venda</span>
          </div>
          <span className="text-xl font-semibold text-blue-900">{formatCurrency(sellingPrice)}</span>
        </div>

        <div className="bg-red-50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Building className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-red-800">Custo do Produto</span>
          </div>
          <span className="text-xl font-semibold text-red-900">{formatCurrency(costOfProduct)}</span>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Receipt className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Taxas do Marketplace</span>
          </div>
          <span className="text-xl font-semibold text-orange-900">{formatCurrency(fees)}</span>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <Truck className="h-5 w-5 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">Custo de Frete</span>
          </div>
          <span className="text-xl font-semibold text-yellow-900">{formatCurrency(shipping)}</span>
        </div>

        <div className="bg-green-50 rounded-lg p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">Lucro Líquido</span>
          </div>
          <span className="text-xl font-semibold text-green-900">{formatCurrency(netProfit)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-100 rounded-lg">
          <h4 className="text-md font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <PieChart className="h-5 w-5 text-blue-600" />
            Detalhamento de Custos
          </h4>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Custo do Produto</span>
                <span className="text-sm font-medium">{formatCurrency(costOfProduct)} ({costPercent.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: `${costPercent}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Taxas do Marketplace</span>
                <span className="text-sm font-medium">{formatCurrency(fees)} ({feesPercent.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${feesPercent}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Frete</span>
                <span className="text-sm font-medium">{formatCurrency(shipping)} ({shippingPercent.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${shippingPercent}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Impostos</span>
                <span className="text-sm font-medium">{formatCurrency(taxes)} ({taxesPercent.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${taxesPercent}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Lucro Líquido</span>
                <span className="text-sm font-medium">{formatCurrency(netProfit)} ({profitPercent.toFixed(1)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: `${profitPercent}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border border-gray-100 rounded-lg">
          <h4 className="text-md font-semibold text-gray-700 mb-3">Análise do Marketplace</h4>

          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-600 block mb-1">Taxa de Comissão</span>
              <span className="text-lg font-medium">{(marketplace.commissionRate * 100).toFixed(1)}%</span>
              <p className="text-xs text-gray-500 mt-1">
                Este marketplace cobra {(marketplace.commissionRate * 100).toFixed(1)}% do seu preço de venda como comissão.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 block mb-1">Taxa Base</span>
              <span className="text-lg font-medium">{formatCurrency(marketplace.baseFee)}</span>
              <p className="text-xs text-gray-500 mt-1">
                Taxa fixa cobrada pelo marketplace independente do preço do item.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 block mb-1">Margem de Lucro</span>
              <span className={`text-lg font-medium ${profitMargin >= 30 ? 'text-green-600' :
                profitMargin >= 20 ? 'text-blue-600' :
                  profitMargin >= 10 ? 'text-yellow-600' : 'text-red-600'
                }`}>{formatPercentage(profitMargin)}</span>
              <p className="text-xs text-gray-500 mt-1">
                Seu lucro como porcentagem do preço de venda.
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 block mb-1">Popularidade do Marketplace</span>
              <div className="flex items-center gap-1">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full ${i < marketplace.popularity ? 'bg-blue-500' : 'bg-gray-200'
                      }`}
                  ></div>
                ))}
                <span className="ml-2 text-sm font-medium">{marketplace.popularity}/10</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Pontuação de popularidade baseada no tráfego e base de clientes do marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysis;