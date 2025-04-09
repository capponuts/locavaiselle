import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Loca Vaisselle - Location de vaisselle en Vendée",
  description: "Location de vaisselle, mobilier et décoration pour vos événements en Vendée. Service professionnel et prix attractifs.",
  keywords: ["location vaisselle", "location mobilier", "événement", "mariage", "Vendée"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div className="logo">
                  Loca Vaisselle
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="nav-link">
                  Accueil
                </Link>
                <Link href="/catalogue" className="nav-link">
                  Catalogue et Tarifs
                </Link>
                <Link href="/devis" className="nav-link">
                  Demande de Devis
                </Link>
                <Link href="/contact" className="btn-primary">
                  Nous Contacter
                </Link>
              </div>
              <MobileMenu />
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-white mt-20">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Loca Vaisselle</h3>
                <p className="text-gray-400">
                  Location de vaisselle et mobilier pour vos événements
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
                    <Link href="/mentions-legales" className="footer-link">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/conditions-generales" className="footer-link">
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
