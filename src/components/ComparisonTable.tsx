import React from 'react';
import { Comparison } from '../types';
import { formatCurrency, formatPercentage } from '../utils/calculationUtils';
import { getMarketplaceLogo } from '../data/marketplaces';
import { CheckCircle, AlertCircle, AlertTriangle, XCircle } from 'lucide-react';

interface ComparisonTableProps {
  comparisons: Comparison[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ comparisons }) => {
  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'best':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'good':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'average':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'poor':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getRecommendationLabel = (recommendation: string) => {
    switch (recommendation) {
      case 'best':
        return <span className="text-green-500 font-medium">Excelente</span>;
      case 'good':
        return <span className="text-blue-500 font-medium">Bom</span>;
      case 'average':
        return <span className="text-yellow-500 font-medium">Médio</span>;
      case 'poor':
        return <span className="text-red-500 font-medium">Ruim</span>;
      default:
        return <span className="text-gray-500 font-medium">N/A</span>;
    }
  };

  if (comparisons.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <p className="text-gray-500">Selecione um produto para ver as comparações de marketplace</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Marketplace
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Preço de Venda
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Taxas
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Frete
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Impostos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lucro Líquido
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Margem
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recomendação
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {comparisons.map((comparison, index) => {
              const MarketplaceLogo = getMarketplaceLogo(comparison.marketplace.id);
              const isFirst = index === 0;
              
              return (
                <tr key={comparison.marketplace.id} className={isFirst ? "bg-blue-50" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center ${isFirst ? 'bg-blue-100' : ''}`}>
                        <MarketplaceLogo className={`h-6 w-6 ${isFirst ? 'text-blue-600' : 'text-gray-500'}`} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{comparison.marketplace.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(comparison.sellingPrice)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(comparison.fees)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(comparison.shipping)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(comparison.taxes)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${isFirst ? 'text-blue-600' : 'text-gray-900'}`}>
                      {formatCurrency(comparison.netProfit)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      comparison.profitMargin >= 30 ? 'text-green-600' :
                      comparison.profitMargin >= 20 ? 'text-blue-600' :
                      comparison.profitMargin >= 10 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {formatPercentage(comparison.profitMargin)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      {getRecommendationIcon(comparison.recommendation)}
                      {getRecommendationLabel(comparison.recommendation)}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;