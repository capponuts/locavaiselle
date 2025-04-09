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
        className="p-2 rounded-lg hover:bg-gray-100"
        aria-label="Menu principal"
      >
        <Menu className="h-6 w-6 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl z-50 p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6 text-gray-600" />
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
                className="btn-primary w-full justify-center"
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