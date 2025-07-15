import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, Search, User, X, Heart, Sparkles, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const location = useLocation();
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Crown },
    { path: '/products', label: 'المنتجات', icon: Sparkles },
    { path: '/cart', label: 'السلة', icon: ShoppingBag },
    { path: '/checkout', label: 'الطلب', icon: Heart }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Premium Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-pink-200/50' 
          : 'bg-gradient-to-r from-white/95 via-pink-50/90 to-purple-50/90 backdrop-blur-lg shadow-lg'
      }`}>
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white text-center py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
          <div className="flex items-center justify-center gap-1 sm:gap-2 animate-pulse px-2">
            <Sparkles size={14} className="sm:w-4 sm:h-4 animate-spin" />
            <span className="truncate">شحن مجاني للطلبات أكثر من 200 درهم</span>
            <Sparkles size={14} className="sm:w-4 sm:h-4 animate-spin" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center group">
              <Link to="/" className="relative text-2xl sm:text-4xl font-bold text-gray-800 hover:scale-110 transition-all duration-300">
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur"></div>
                <div className="relative flex items-center">
                  <Crown className="text-yellow-500 mr-1 sm:mr-2 animate-pulse" size={24} />
                  <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">أناقة</span>
                  <span className="text-amber-600 mr-1 sm:mr-2 drop-shadow-sm hidden min-[350px]:inline"> الحجاب</span>
                </div>
              </Link>
            </div>

            {/* Enhanced Navigation */}
            <nav className="hidden lg:flex items-center space-x-reverse space-x-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      location.pathname === item.path
                        ? 'text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/25'
                        : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent size={16} className={`${location.pathname === item.path ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                      <span>{item.label}</span>
                    </div>
                    {location.pathname === item.path && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Enhanced Icons */}
            <div className="flex items-center space-x-reverse space-x-1 sm:space-x-3">
              {/* Search Button */}
              <button className="group relative p-2 sm:p-3 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
                <Search size={18} className="sm:w-[22px] sm:h-[22px] relative z-10 group-hover:animate-pulse" />
              </button>

              {/* User Button */}
              <button className="group relative p-2 sm:p-3 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
                <User size={18} className="sm:w-[22px] sm:h-[22px] relative z-10 group-hover:animate-bounce" />
              </button>

              {/* Enhanced Cart */}
              <Link to="/cart" className="group relative p-2 sm:p-3 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 bg-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
                <ShoppingBag size={18} className="sm:w-[22px] sm:h-[22px] relative z-10 group-hover:animate-bounce" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
                    {itemCount}
                  </span>
                )}
              </Link>

              {/* Enhanced Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden group relative p-2 sm:p-3 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-110"
              >
                <div className="absolute inset-0 bg-pink-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100"></div>
                <div className="relative z-10">
                  {isMobileMenuOpen ? (
                    <X size={18} className="sm:w-[22px] sm:h-[22px] animate-spin" />
                  ) : (
                    <Menu size={18} className="sm:w-[22px] sm:h-[22px] group-hover:animate-pulse" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-pink-900/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
          style={{ paddingTop: '6rem' }}
        />
      )}

      {/* Enhanced Mobile Menu */}
      <div className={`fixed top-24 left-2 right-2 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl z-50 lg:hidden transform transition-all duration-500 ease-out max-h-[85vh] overflow-y-auto ${
        isMobileMenuOpen 
          ? 'translate-y-0 opacity-100 scale-100' 
          : '-translate-y-full opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Enhanced Mobile Navigation Links */}
          <div className="space-y-2 sm:space-y-3">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`group block p-3 sm:p-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/25'
                      : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:shadow-lg'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-1.5 sm:p-2 rounded-full ${
                      location.pathname === item.path 
                        ? 'bg-white/20' 
                        : 'bg-gray-100 group-hover:bg-white/20'
                    }`}>
                      <IconComponent size={18} className={`sm:w-5 sm:h-5 ${
                        location.pathname === item.path ? 'animate-pulse' : 'group-hover:animate-bounce'
                      }`} />
                    </div>
                    <span className="flex-1">{item.label}</span>
                    {location.pathname === item.path && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Enhanced Mobile Action Buttons */}
          <div className="pt-3 sm:pt-4 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <button className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="p-1.5 sm:p-2 rounded-full bg-white group-hover:bg-pink-100 transition-colors duration-300">
                  <Search size={16} className="sm:w-5 sm:h-5 group-hover:animate-pulse" />
                </div>
                <span className="text-xs sm:text-sm font-medium mt-1 sm:mt-2">بحث</span>
              </button>
              
              <button className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <div className="p-1.5 sm:p-2 rounded-full bg-white group-hover:bg-purple-100 transition-colors duration-300">
                  <User size={16} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
                </div>
                <span className="text-xs sm:text-sm font-medium mt-1 sm:mt-2">حسابي</span>
              </button>
              
              <Link 
                to="/cart" 
                onClick={closeMobileMenu}
                className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="p-1.5 sm:p-2 rounded-full bg-white group-hover:bg-pink-100 transition-colors duration-300">
                  <ShoppingBag size={16} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
                </div>
                <span className="text-xs sm:text-sm font-medium mt-1 sm:mt-2">السلة</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Enhanced Mobile CTA */}
          <div className="pt-3 sm:pt-4">
            <Link
              to="/products"
              onClick={closeMobileMenu}
              className="group relative block w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white text-center py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Sparkles size={16} className="sm:w-5 sm:h-5 animate-spin" />
                <span>تسوقي الآن</span>
                <Sparkles size={16} className="sm:w-5 sm:h-5 animate-spin" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-24 sm:h-28"></div>
    </>
  );
};

export default Header;