import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Menu Kami', path: '/menu' },
    { name: 'Lokasi', path: '/lokasi' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdfcfb]/90 backdrop-blur-md border-b border-stone-200">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold text-primary-container uppercase tracking-tighter">
          Gado-Gado Kaliurang
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors relative pb-1 ${
                location.pathname === link.path
                  ? 'text-primary-container font-bold border-b-2 border-primary-container'
                  : 'text-stone-600 hover:text-primary-container'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-secondary-container text-white font-bold text-[10px] md:text-xs tracking-widest px-4 md:px-6 py-2 rounded-full hover:opacity-80 transition-all uppercase">
            Pesan Sekarang
          </button>
          
          <button 
            className="md:hidden text-stone-600 focus:outline-none flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-stone-200 px-6 py-8"
        >
          <div className="flex flex-col gap-6 font-serif text-lg text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={location.pathname === link.path ? 'text-primary-container font-bold' : 'text-stone-600'}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
