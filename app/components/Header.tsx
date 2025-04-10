'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container-custom py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-loca-vaisselle.png"
            alt="Logo LocaVaiselle"
            width={120}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/catalogue"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                href="/devis"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
              >
                Devis
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden p-1.5 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu principal"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Menu mobile */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
} 