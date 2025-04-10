'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-[3.5rem] left-0 right-0 bg-white shadow-lg"
        >
          <nav className="container-custom py-6">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-loca-vaisselle.png"
                alt="Logo LocaVaiselle"
                width={200}
                height={67}
                priority
                className="h-16 w-auto object-contain"
              />
            </div>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-primary transition-colors text-base font-medium py-2"
                  onClick={onClose}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue"
                  className="block text-gray-700 hover:text-primary transition-colors text-base font-medium py-2"
                  onClick={onClose}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="block text-gray-700 hover:text-primary transition-colors text-base font-medium py-2"
                  onClick={onClose}
                >
                  Devis
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-primary transition-colors text-base font-medium py-2"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 