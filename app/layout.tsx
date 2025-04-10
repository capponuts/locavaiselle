import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocaVaiselle - Location de vaisselle pour vos événements",
  description: "Location de vaisselle haut de gamme pour vos mariages, soirées et événements professionnels. Service de qualité et livraison sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
