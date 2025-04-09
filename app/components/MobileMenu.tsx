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
        className="text-gray-700"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/catalogue" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Catalogue et Tarifs
            </Link>
            <Link 
              href="/devis" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Demande de Devis
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 