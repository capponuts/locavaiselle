"use client";

import { useState } from "react";

export default function Devis() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    date: "",
    nombreInvites: "",
    typeEvenement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-center mb-12">Demande de Devis</h1>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date de l'événement *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="nombreInvites" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre d'invités *
                </label>
                <input
                  type="number"
                  id="nombreInvites"
                  name="nombreInvites"
                  required
                  min="1"
                  value={formData.nombreInvites}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="typeEvenement" className="block text-sm font-medium text-gray-700 mb-1">
                  Type d'événement *
                </label>
                <select
                  id="typeEvenement"
                  name="typeEvenement"
                  required
                  value={formData.typeEvenement}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="mariage">Mariage</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="bapteme">Baptême</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (précisez vos besoins)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>

            <div className="text-sm text-gray-500 mb-6">
              * Champs obligatoires
            </div>

            <div className="flex justify-center">
              <button type="submit" className="btn-primary">
                Envoyer la demande
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Besoin d'aide pour remplir le formulaire ?
          </p>
          <p className="text-gray-600">
            Contactez-nous au <span className="font-semibold">06 09 70 04 50</span>
          </p>
        </div>
      </div>
    </div>
  );
} 