"use client";

import Link from 'next/link';
import { useState } from 'react';

// Note: We cannot export `metadata` from a client component.
// This is a limitation of the Next.js App Router.
// The title for this page will be inherited from the root layout.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    option: 'individu'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you could add an integration with a service like Formspree, Netlify Forms, or a simple mailto.
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Parlons <span className="italic">(vraiment)</span> humain
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Pas de formulaire froid. Juste une invitation à commencer la conversation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {!isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Choisis ton option :</h2>

            <div className="flex justify-center space-x-4 mb-8">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="individu"
                  checked={formData.option === 'individu'}
                  onChange={handleChange}
                  className="text-blue-900 focus:ring-gold-200"
                />
                <span>Je suis un·e individu</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="entreprise"
                  checked={formData.option === 'entreprise'}
                  onChange={handleChange}
                  className="text-blue-900 focus:ring-gold-200"
                />
                <span>Je représente une entreprise</span>
              </label>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ton nom (ou pseudo, on juge pas)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-200 focus:border-gold-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Ton email (pour te répondre, pas pour te spammer)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-200 focus:border-gold-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Ton message (ou un meme, au choix)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold-200 focus:border-gold-200"
                  placeholder="Ex: 'Mon système est en PLS, aide-moi Clovis !' ou '😅'"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-900 to-purple-800 text-white px-8 py-3 rounded-full font-medium hover:from-purple-800 hover:to-blue-900 transition-colors"
                >
                  Envoyer (et respirer)
                </button>
              </div>
            </form>

            <div className="mt-8 text-center space-y-4">
              <p className="text-gray-600">Tu préfères autre chose ?</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://calendly.com/ton-lien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-medium hover:underline"
                >
                  📅 Prendre un créneau (Calendly)
                </a>
                <a
                  href="mailto:ton-email@be-efficace.com"
                  className="text-blue-900 font-medium hover:underline"
                >
                  ✉️ M’envoyer un email
                </a>
                <a
                  href="https://wa.me/tonnumero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-medium hover:underline"
                >
                  💬 WhatsApp (pour les timides)
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Message envoyé !</h2>
            <p className="text-gray-700 mb-6">
              Merci, {formData.name}. Je te réponds dans les 48h (sauf si c’est un dimanche, parce que même les coachs ont besoin de Wu Wei).
            </p>
            <Link
              href="/"
              className="inline-block bg-gold-200 text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-gold-300 transition-colors"
            >
              Retour à l’accueil
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
