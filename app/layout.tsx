import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loca Vaisselle - Location de vaisselle en Vendée",
  description: "Location de vaisselle, mobilier et décoration pour vos événements en Vendée et Loire-Atlantique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="container-custom py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Loca Vaisselle Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-[#FF6B00] transition-colors">
                  Accueil
                </Link>
                <Link href="/catalogue" className="text-gray-700 hover:text-[#FF6B00] transition-colors">
                  Catalogue et Tarifs
                </Link>
                <Link href="/devis" className="text-gray-700 hover:text-[#FF6B00] transition-colors">
                  Demande de Devis
                </Link>
                <Link href="/contact" className="btn-primary">
                  Nous Contacter
                </Link>
              </div>
              <button className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white mt-20">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Loca Vaisselle</h3>
                <p className="text-gray-400">
                  Location de vaisselle, mobilier et décoration pour vos événements en Vendée et Loire-Atlantique
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400">5 ZA des Terres Neuves</p>
                <p className="text-gray-400">85300 Froidfond</p>
                <p className="text-gray-400">06 09 70 04 50</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Horaires</h3>
                <p className="text-gray-400">Lun - Ven: 8:00 - 20:00</p>
                <p className="text-gray-400">Sam - Dim: Sur rendez-vous</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/conditions-generales" className="text-gray-400 hover:text-white transition-colors">
                      Conditions générales
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Loca Vaisselle. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
