import React from 'react';

export default function MentionsLegales() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg prose-slate mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
          <p>
            Le site LocaVaiselle est édité par la société Loca Vaisselle, 
            située au 5 ZA des Terres Neuves, 85300 Froidfond.
          </p>
          <p>
            Téléphone : 06 09 70 04 50<br />
            Email : contact@locavaisselle.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
          <p>
            Le site est hébergé par OVH SAS<br />
            2 rue Kellermann<br />
            59100 Roubaix - France
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
            reproduction sont réservés, y compris pour les documents téléchargeables 
            et les représentations iconographiques et photographiques.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Protection des données personnelles</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, 
            vous disposez d'un droit d'accès, de modification et de suppression des 
            données vous concernant. Pour exercer ce droit, veuillez nous contacter 
            par email à contact@locavaisselle.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>
            Le site utilise des cookies pour améliorer l'expérience utilisateur. 
            En naviguant sur le site, vous acceptez leur utilisation. Pour plus 
            d'informations, consultez notre politique de confidentialité.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Crédits</h2>
          <p>
            Site réalisé par <a href="https://kapinfo.fr" className="text-[#FF6B00] hover:underline">kapinfo.fr</a>
          </p>
        </section>
      </article>
    </div>
  );
} 