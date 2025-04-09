'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container-custom section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          {...fadeIn}
          className="text-center mb-12"
        >
          Contactez-nous
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            {...fadeIn} 
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold">Nos coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-gray-600">06 09 70 04 50</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">contact@locavaiselle.fr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-gray-600">5 ZA des Terres Neuves</p>
                  <p className="text-gray-600">85300 Froidfond</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            className="card p-6"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input-field"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field"
                  placeholder="Votre message"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 