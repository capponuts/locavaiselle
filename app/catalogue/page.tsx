'use client';

import Link from "next/link";

export default function Catalogue() {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-center mb-12">Catalogue et Tarifs</h1>

        {/* Navigation des catégories */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="btn-primary">Vaisselle</button>
          <button className="btn-secondary">Mobilier</button>
          <button className="btn-secondary">Linge</button>
          <button className="btn-secondary">Décoration</button>
        </div>

        {/* Packs Vaisselle */}
        <section className="mb-16">
          <h2 className="mb-8">Packs Vaisselle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Pack Elégance Ø 1</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assiette Ronde 27 cm
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assiette Ronde 24 cm
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assiette Ronde 21 cm
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Vin 19 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Eau 24 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Flûte 17 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Couverts complets
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">1,00 € / personne</div>
              <Link href="/devis" className="btn-primary w-full text-center">
                Commander
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Pack Elégance Ø 2</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assiette Ronde 27 cm
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assiette Ronde 24 cm
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Vin 19 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Eau 24 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Flûte 17 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Couverts complets
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">2,00 € / personne</div>
              <Link href="/devis" className="btn-primary w-full text-center">
                Commander
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Pack Elégance Ø 3</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Assiette Ronde 27 cm
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Verre Vin 19 cl
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Couverts complets
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary mb-4">2,20 € / personne</div>
              <Link href="/devis" className="btn-primary w-full text-center">
                Commander
              </Link>
            </div>
          </div>
        </section>

        {/* Location à la carte */}
        <section className="mb-16">
          <h2 className="mb-8">Location à la carte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Verres</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Pied Vin 19 cl</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Pied Eau 24 cl</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Pied Flûte 17 cl</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Whisky 16 cl</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Assiettes</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Ronde 27 cm</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Ronde 24 cm</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Ronde 21 cm</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Carrée 26 cm</span>
                  <span className="font-semibold">0,25 €</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Couverts</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Fourchette à Viande</span>
                  <span className="font-semibold">0,15 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Couteau à Viande</span>
                  <span className="font-semibold">0,15 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Cuillère à Soupe</span>
                  <span className="font-semibold">0,15 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Cuillère à Dessert</span>
                  <span className="font-semibold">0,15 €</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Mobilier</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Table Rectangulaire 6/10 pers.</span>
                  <span className="font-semibold">15,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Chaise PVC Miami</span>
                  <span className="font-semibold">1,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Table ronde ø 1.50m</span>
                  <span className="font-semibold">10,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Barnum 3x3m</span>
                  <span className="font-semibold">90,00 €</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl mb-6">
            Besoin d'aide pour choisir ? Notre équipe est là pour vous conseiller.
          </p>
          <Link href="/devis" className="btn-primary">
            Demander un devis personnalisé
          </Link>
        </div>
      </div>
    </div>
  );
} 