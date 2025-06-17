'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons (optional)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['home', 'projects', 'skills', 'contact'];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setIsOpen(false); // Close menu after click
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 md:px-12 md:py-6 flex items-center justify-between z-50 bg-charcoal bg-opacity-90 backdrop-blur-md">
      <div className="text-primary font-bold text-2xl md:text-3xl tracking-widest hover:text-white cursor-pointer">
        AB<span className="text-accent">._</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-12 text-foreground font-mono text-sm">
        {links.map((link, index) => (
          <li key={link} className="group">
            <a
              href={`#${link}`}
              onClick={(e) => handleClick(e, link)}
              className="relative inline-block hover:text-white transition-colors duration-300"
            >
              <span className="text-secondary">0{index + 1}</span> / {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-charcoal bg-opacity-95 shadow-md py-6 flex flex-col items-center gap-6 text-foreground font-mono text-sm z-50 md:hidden">
          {links.map((link, index) => (
            <li key={link} className="group">
              <a
                href={`#${link}`}
                onClick={(e) => handleClick(e, link)}
                className="hover:text-white transition-colors duration-300"
              >
                <span className="text-secondary">0{index + 1}</span> / {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
