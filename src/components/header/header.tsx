'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">NIA</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/features" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
              Características
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
              Precios
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
              Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors text-sm font-medium">
              Contacto
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-primary hover:bg-transparent"
              asChild
            >
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 mt-4 pb-4">
              <Link
                href="/features"
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Características
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="ghost" 
                  className="text-gray-700 hover:text-primary hover:bg-transparent"
                  asChild
                >
                  <Link href="/login">Iniciar Sesión</Link>
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <Link href="/register">Registrarse</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 