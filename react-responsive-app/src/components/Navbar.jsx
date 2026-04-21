import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Store, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path, hash = '') => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

  const linkClass = (path, hash = '') =>
    `font-medium transition-colors hover:text-brand-primary ${
      isActive(path, hash) ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-600'
    }`;

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Store className="h-8 w-8 text-brand-primary" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">
               <span className="text-brand-primary">Niti 2</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={linkClass('/')}>Beranda</Link>
            <a href="/#tentang" className={linkClass('/', '#tentang')}>Tentang Niti 2</a>
            <Link to="/catalog" className={linkClass('/catalog')}>Katalog Produk</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-brand-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-16 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <a 
              href="/#tentang" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              Tentang Niti 2
            </a>
            <Link 
              to="/catalog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-brand-light hover:text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              Katalog Produk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
