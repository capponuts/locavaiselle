# Loca Vaisselle

Site web de location de vaisselle et mobilier pour événements en Vendée.

## Technologies utilisées

- Next.js 14.1.3
- React 18.2.0
- TypeScript 5.3.3
- Tailwind CSS 3.4.1
- Framer Motion 11.0.8
- Lucide React 0.344.0

## Structure du projet

```
locavaiselle/
├── app/                    # Pages et composants de l'application
│   ├── components/         # Composants réutilisables
│   ├── contact/           # Page de contact
│   ├── catalogue/         # Page catalogue
│   ├── devis/            # Page devis
│   ├── mentions-legales/ # Page mentions légales
│   ├── globals.css       # Styles globaux
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Page d'accueil
├── public/                # Fichiers statiques
│   ├── images/           # Images du site
│   ├── robots.txt        # Configuration des robots
│   └── sitemap.xml       # Sitemap
├── types/                # Définitions de types TypeScript
├── .gitignore           # Fichiers ignorés par Git
├── next.config.js       # Configuration Next.js
├── package.json         # Dépendances et scripts
├── postcss.config.js    # Configuration PostCSS
├── tailwind.config.js   # Configuration Tailwind
└── tsconfig.json        # Configuration TypeScript
```

## Installation

```bash
# Installer les dépendances
npm install

# Développement
npm run dev

# Production
npm run build
npm start
```

## Déploiement

Le site est déployé sur Vercel. Les mises à jour sont automatiquement déployées lors des push sur la branche main.

## Licence

Tous droits réservés © Loca Vaisselle
