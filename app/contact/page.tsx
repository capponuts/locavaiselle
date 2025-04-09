'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container-custom section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          {...fadeIn}
          className="text-4xl font-bold text-center mb-8"
        >
          Contactez-nous
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div 
            {...fadeIn}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
            
            <div className="flex items-center space-x-4">
              <Phone className="text-primary w-6 h-6" />
              <p>01 23 45 67 89</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-primary w-6 h-6" />
              <p>contact@locavaiselle.fr</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary w-6 h-6" />
              <p>123 Rue de la Vaisselle, 75000 Paris</p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form 
            {...fadeIn}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="input-field"
                placeholder="Votre message"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Envoyer
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
} 