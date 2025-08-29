import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  return (
    <footer className="bg-slate-800 text-white animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4 animate-fade-in-up animation-delay-200">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <img src='logo/image.png' alt='image' className="h-12 w-30 text-white" />
              </div>
              {/* <span className="text-xl font-bold">MD Prime Logistics LLC</span> */}
            </div>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">MC Number: 1477633</p>
              <p className="text-sm">DOT Number: 3961635</p>
              <p className="text-sm">EIN: 99-4506377</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 animate-fade-in-up animation-delay-400">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 animate-bounce-subtle" />
                <span className="text-sm">5960 Fairview Rd, Suite 400<br />Charlotte, NC 28210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 animate-bounce-subtle" />
                <a href="tel:+14436251223" className="text-sm hover:text-teal-400 transition-colors">
                  (443) 625-1223
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 animate-bounce-subtle" />
                <a href="mailto:dispatch@mdprimelogistics.com" className="text-sm hover:text-teal-400 transition-colors">
                  dispatch@mdprimelogistics.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in-up animation-delay-600">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-gray-300 hover:text-teal-400 hover:scale-105 hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center animate-fade-in-up animation-delay-800">
          <p className="text-sm text-gray-400">
            © {currentYear} MD Prime Logistics LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;