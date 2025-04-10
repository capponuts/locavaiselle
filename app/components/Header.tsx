'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          LocaVaiselle
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/catalogue"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                href="/devis"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Devis
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu principal"
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
} 