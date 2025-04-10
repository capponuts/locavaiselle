'use client';

import Link from "next/link";
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
          className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg"
        >
          <nav className="container-custom py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/devis"
                  className="block text-gray-700 hover:text-primary transition-colors"
                  onClick={onClose}
                >
                  Devis
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-primary transition-colors"
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