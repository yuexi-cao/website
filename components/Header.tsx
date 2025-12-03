import React, { useState } from 'react';
import { Container } from './ui/Container';
import { MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  activeSection: string;
  cvUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, cvUrl }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Teaching', href: '#teaching', id: 'teaching' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 h-16 transition-all duration-300">
      <Container className="h-full flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-lg font-medium tracking-tight text-neutral-900"
        >
          Yuexi Cao
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-neutral-900 font-medium'
                  : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 border border-neutral-200 rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300"
          >
            CV
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-neutral-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-neutral-100 p-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg ${
                  activeSection === link.id ? 'text-neutral-900 font-medium' : 'text-neutral-500'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-neutral-900 font-medium pt-4 border-t border-neutral-100"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};