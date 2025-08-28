import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ currentLanguage = 'en', onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇹🇳' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (langCode) => {
    onLanguageChange?.(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              Mahmoud Guebsi
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md transition-colors ${
                        currentLanguage === lang.code 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                      {currentLanguage === lang.code && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

