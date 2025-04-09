const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    filename: 'hero-bg.jpg',
    width: 1920,
    height: 1080,
    quality: 80
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    filename: 'about.jpg',
    width: 1200,
    height: 800,
    quality: 80
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    filename: 'contact.jpg',
    width: 1200,
    height: 800,
    quality: 80
  }
];

const downloadAndOptimizeImage = async (image) => {
  const imagePath = path.join(__dirname, '../public/images', image.filename);
  
  // Créer le dossier s'il n'existe pas
  if (!fs.existsSync(path.join(__dirname, '../public/images'))) {
    fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true });
  }

  return new Promise((resolve, reject) => {
    https.get(`${image.url}?w=${image.width}&h=${image.height}&fit=crop`, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        try {
          await sharp(buffer)
            .resize(image.width, image.height, {
              fit: 'cover',
              position: 'center'
            })
            .jpeg({ quality: image.quality })
            .toFile(imagePath);
          console.log(`✅ Image ${image.filename} téléchargée et optimisée`);
          resolve();
        } catch (error) {
          console.error(`❌ Erreur lors de l'optimisation de ${image.filename}:`, error);
          reject(error);
        }
      });
    }).on('error', reject);
  });
};

const main = async () => {
  console.log('🚀 Début du téléchargement des images...');
  for (const image of images) {
    await downloadAndOptimizeImage(image);
  }
  console.log('✨ Toutes les images ont été téléchargées et optimisées !');
};

main().catch(console.error); 