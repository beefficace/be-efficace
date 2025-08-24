import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos | Be Efficace – Clovis, coach en complexité apprivoisée',
  description: "Découvre l'histoire de Clovis, coach en développement personnel et systémique, et sa méthode pour apprivoiser la complexité.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Moi, Clovis, ou :<br />
            <span className="italic">Comment j’ai arrêté de me prendre pour un super-héros</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Je ne suis pas un gourou. Juste un type qui a appris à nager dans la soupe (et parfois, à en faire une bonne recette).
          </p>
        </div>
      </section>

      {/* Section "Mon Parcours" */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Mon parcours en 3 actes (spoiler : y’a un burn-out)</h2>

          {/* Timeline */}
          <div className="space-y-8">
            {/* Acte 1 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-gold-200 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-lg">L’ère du "Je sais tout"</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">
                  J’ai cru que la productivité était une question de willpower. J’avais des to-do lists longues comme le bras, des routines "optimisées", et une capacité à me sentir coupable de ne pas en faire assez.
                  <span className="block mt-2 italic">Spoiler : c’est une question de système, pas de volonté.</span>
                </p>
              </div>
            </div>

            {/* Acte 2 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-gold-200 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-lg">La révélation</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">
                  Un burn-out, trois livres de Marc Halévy, et une retraite en montagne plus tard… j’ai compris que la complexité n’était pas l’ennemi. C’était juste un partenaire de danse un peu exigeant.
                  <span className="block mt-2 font-medium">J’ai arrêté de lutter. J’ai commencé à observer.</span>
                </p>
              </div>
            </div>

            {/* Acte 3 */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="md:w-1/3 text-center">
                <div className="bg-gold-200 text-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-lg">Aujourd’hui</h3>
              </div>
              <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">
                  Je passe mes journées à aider les gens à voir les fils invisibles qui les tirent dans tous les sens. Mon outil préféré ? L’écoute. Mon accessoire indispensable ? Des post-it et une tasse de thé qui ne quitte jamais mon bureau.
                  <span className="block mt-2 italic">(Et oui, j’ai bien des certifs de la NASA. Non, je ne sais toujours pas piloter une fusée.)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Ma Boîte à Outils" */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Ma boîte à outils (version "sans jargon")</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Outils 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold text-xl mb-2">Systémique</h3>
              <p className="text-gray-600">J’ai appris de Marc Halévy que tout est connecté. Mon job ? T’aider à voir les fils.</p>
            </div>
            {/* Outils 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-semibold text-xl mb-2">Biohacking non-tech</h3>
              <p className="text-gray-600">Dormir, manger, bouger : les bases que 90% des gens ignorent (et qui changent tout).</p>
            </div>
            {/* Outils 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-semibold text-xl mb-2">Nocode & IA</h3>
              <p className="text-gray-600">Parce que la tech doit servir l’humain, pas le remplacer (ou le rendre fou).</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Envie de savoir si on est faits pour bosser ensemble ?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">Demande-moi quel est mon dernier échec. Ou mieux : partage le tien.</p>
          <Link
            href="/contact"
            className="inline-block bg-gold-200 text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-gold-300 transition-colors"
          >
            On en parle ?
          </Link>
        </div>
      </section>
    </div>
  );
}
