import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, Search, User, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/products', label: 'المنتجات' },
    { path: '/cart', label: 'السلة' },
    { path: '/checkout', label: 'الطلب' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-800 hover:scale-105 transition-transform">
              <span className="text-pink-500 drop-shadow-sm">أناقة</span>
              <span className="text-amber-600 mr-2 drop-shadow-sm">الحجاب</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-reverse space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-rose-50 shadow-sm'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-reverse space-x-4">
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <User size={20} />
            </button>
            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors">
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-pink-100">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-rose-50 shadow-sm'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Icons */}
              <div className="flex items-center justify-center space-x-reverse space-x-6 pt-4 pb-2">
                <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                  <Search size={20} />
                </button>
                <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                  <User size={20} />
                </button>
                <Link 
                  to="/cart" 
                  className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <ShoppingBag size={20} />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;