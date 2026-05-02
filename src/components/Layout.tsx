import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      
      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-white/90 backdrop-blur-md border-t border-stone-200 z-50 pb-safe shadow-lg">
        <NavItem to="/" icon="home" label="Beranda" />
        <NavItem to="/menu" icon="restaurant_menu" label="Menu" />
        <NavItem to="/lokasi" icon="location_on" label="Lokasi" />
        <NavItem to="/kontak" icon="chat" label="Kontak" />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center justify-center transition-all ${
        isActive ? 'text-secondary-container scale-110' : 'text-stone-400'
      }`}
    >
      <span className={`material-symbols-outlined ${isActive ? 'fill-1' : ''}`}>{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

// Fill setting for material icons
const style = document.createElement('style');
style.textContent = `
  .material-symbols-outlined.fill-1 {
    font-variation-settings: 'FILL' 1;
  }
`;
document.head.append(style);
