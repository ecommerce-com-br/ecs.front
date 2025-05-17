import React, { useState, useEffect } from 'react';
import { Product, Comparison } from '../types';
import ProductGrid from '../components/ProductGrid';
import ComparisonTable from '../components/ComparisonTable';
import DetailedAnalysis from '../components/DetailedAnalysis';
import { mockProducts } from '../data/mockProducts';
import { marketplaces } from '../data/marketplaces';
import { compareMarketplaces } from '../utils/calculationUtils';
import { Download, Search } from 'lucide-react';
import * as XLSX from 'xlsx';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [selectedComparison, setSelectedComparison] = useState<Comparison | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [priceRange, ] = useState<{ min: string; max: string }>({ min: '', max: '' });

  const categories = Array.from(new Set(mockProducts.map(p => p.category)));

// fetch teste depois trocar pelo bling
// Verificar se será possível exportar produtos no futuro

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(mockProducts);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const newComparisons = compareMarketplaces(selectedProduct, marketplaces);
      setComparisons(newComparisons);
      setSelectedComparison(newComparisons[0]);
    } else {
      setComparisons([]);
      setSelectedComparison(null);
    }
  }, [selectedProduct]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleExport = () => {
    if (!selectedProduct || comparisons.length === 0) return;

    const exportData = comparisons.map(comparison => ({
      'Marketplace': comparison.marketplace.name,
      'Preço de Venda': comparison.sellingPrice,
      'Taxas': comparison.fees,
      'Frete': comparison.shipping,
      'Impostos': comparison.taxes,
      'Lucro Líquido': comparison.netProfit,
      'Margem de Lucro': `${comparison.profitMargin.toFixed(1)}%`,
      'Recomendação': comparison.recommendation
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Comparação');
    XLSX.writeFile(wb, `comparacao-${selectedProduct.name}.xlsx`);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesPrice = (!priceRange.min || product.price >= parseFloat(priceRange.min)) &&
      (!priceRange.max || product.price <= parseFloat(priceRange.max));

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Comparação de Marketplaces</h1>
            <p className="text-gray-600 mt-1">
              Compare seus produtos em diferentes marketplaces para encontrar o melhor lugar para vender
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              disabled={!selectedProduct}
              className={`inline-flex items-center gap-2 px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${selectedProduct
                  ? 'border-transparent text-white bg-blue-600 hover:bg-blue-700'
                  : 'border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed'
                }`}
            >
              <Download className="h-4 w-4" />
              Exportar
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="flex gap-4">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="all">Todas as Categorias</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* <div className="flex gap-2 items-center">
                <input
                  type="number"
                  placeholder="Preço Min"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  className="block w-24 pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Preço Max"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  className="block w-24 pl-3 pr-3 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                />
              </div>
               */}
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        ) : (
          <>
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Seus Produtos</h2>
              <ProductGrid
                products={filteredProducts}
                onProductSelect={handleProductSelect}
                selectedProductId={selectedProduct?.id || null}
              />
            </div>

            {selectedProduct && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    Comparação de Marketplaces para {selectedProduct.name}
                  </h2>
                </div>

                <ComparisonTable
                  comparisons={comparisons}
                />

                {selectedComparison && (
                  <div className="mt-6">
                    <DetailedAnalysis comparison={selectedComparison} />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Dashboard;