'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="menu-button"
        aria-label="Menu principal"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <>
          <div className="mobile-menu" onClick={() => setIsOpen(false)} />
          <div className="mobile-menu-content">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl">Menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/catalogue" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Catalogue et Tarifs
              </Link>
              <Link 
                href="/devis" 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Demande de Devis
              </Link>
              <Link 
                href="/contact" 
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                Nous Contacter
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
} 