import Link from 'next/link';

export default function Footer() {
  return (
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
                <Link 
                  href="/mentions-legales" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link 
                  href="/conditions-generales" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
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
  );
} 