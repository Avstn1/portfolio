'use client';
import React from 'react';

const Navbar = () => {
  const links = ['home', 'projects', 'skills', 'experience', 'contact'];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-12 py-6 flex items-center justify-between z-50 bg-charcoal bg-opacity-90 backdrop-blur-md">
      <div className="text-primary font-bold text-3xl tracking-widest hover:text-white hover:cursor-pointer">
        AB<span className="text-accent">._</span>
      </div>

      <ul className="hidden md:flex gap-x-24 text-foreground font-mono text-sm">
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
    </nav>
  );
};

export default Navbar;
