import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex relative items-center space-x-2 group">
            <div className="rounded-xl transition-all duration-300">
              <img
                src="logo/image.png"
                alt="MD Prime Logistics"
                className="
                  h-12 w-44
                  rounded-xl 
                  border border-gray-200 
                  shadow-md 
                  bg-white 
                  p-1
                  transition-all duration-300
                  hover:shadow-xl 
                  hover:scale-105 
                  hover:border-teal-400
                "
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-50 hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 animate-slide-down">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
