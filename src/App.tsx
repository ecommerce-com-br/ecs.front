import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';

function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'inventory'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'dashboard' ? (
        <Dashboard />
      ) : (
        <Inventory />
      )}
    </div>
  );
}

export default App;