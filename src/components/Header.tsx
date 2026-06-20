import React, { useState, useEffect } from 'react';
import { Menu, X, Octagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; href: string }[] = [
    { name: 'Capa', href: '#home' },
    { name: 'Visão', href: '#overview' },
    { name: 'Oportunidade', href: '#opportunity' },
    { name: 'Fases', href: '#phases' },
    { name: 'Pouso Alegre', href: '#pouso-alegre' },
    { name: 'Financeiro', href: '#investment-thesis' },
    { name: 'Estrutura', href: '#capital-structure' },
    { name: 'Valuation', href: '#valuation' },
    { name: 'Áreas', href: '#areas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-900/95 backdrop-blur-md py-3 shadow-lg border-b border-gray-800' : 'bg-brand-900 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="https://octis.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
          <Octagon className="w-8 h-8 text-accent transition-transform group-hover:scale-105" />
          <span className="font-serif text-2xl font-semibold tracking-wide text-white">
            OCTIS<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-4 xl:gap-6 flex-wrap justify-end">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-900 border-t border-brand-800 shadow-xl md:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-4 text-sm font-medium text-gray-300 hover:text-accent border-b border-brand-800 last:border-none uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
