import React from 'react';
import { BarChart3, Package, Settings, Bell, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: 'dashboard' | 'inventory';
  onNavigate: (page: 'dashboard' | 'inventory') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg">
                <svg
                  className="h-8 w-8 text-teal-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="18" rx="2" />
                  <path d="M12 7v10M7 12h10" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">ECS</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => onNavigate('dashboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === 'dashboard'
                  ? 'bg-white/10 text-white shadow-inner'
                  : 'text-gray-300 hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Comparação de Marketplaces
                </div>
              </button>

              <button
                onClick={() => onNavigate('inventory')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === 'inventory'
                  ? 'bg-white/10 text-white shadow-inner'
                  : 'text-gray-300 hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Estoque
                </div>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* <div className="hidden lg:flex items-center relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-64 px-4 py-1.5 pl-10 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-3" />
            </div> */}

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Bell className="h-5 w-5 text-gray-300" />
              </button>
              <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Settings className="h-5 w-5 text-gray-300" />
              </button>
            </div>

            <div className="flex items-center gap-3 pl-3 border-l border-white/20">
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium">João marcos</div>
                <div className="text-xs text-gray-400">Administrador</div>
              </div>
              <button className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center text-white font-medium shadow-lg">
                  JS
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === 'dashboard'
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:bg-white/5'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Marketplaces
              </div>
            </button>

            <button
              onClick={() => onNavigate('inventory')}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === 'inventory'
                ? 'bg-white/10 text-white'
                : 'text-gray-300 hover:bg-white/5'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Package className="h-4 w-4" />
                Estoque
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;