import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Individus | Be Efficace – Dompter ton chaos personnel',
  description: "Accompagnement en développement personnel pour apprivoiser la complexité de ta vie, sans recettes toutes faites.",
};

export default function IndividusPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ton Système,<br />
            <span className="italic">Ton Terrain de Jeu</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ici, on ne te dit pas quoi faire. On t’aide à voir ce que tu fais déjà – et à ajuster le tir.
          </p>
        </div>
      </section>

      {/* Section "Métaphore d'entrée" */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ton corps est une startup. Ton mental, son PDG surcaféiné.</h2>
            <p className="text-gray-700 italic">
              Et si on faisait une réunion de sync ?
            </p>
          </div>
        </div>
      </section>

      {/* Section "Les 3 Leviers" */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Les 3 leviers pour dompter ton chaos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Levier 1 : Biohacking */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4 text-center">💤</div>
              <h3 className="font-semibold text-xl mb-2 text-center">Biohacking non-tech</h3>
              <p className="text-gray-600 text-center">
                Dormir, manger, bouger : les API de ton système opérationnel.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✅ <strong>Sommeil</strong> : Ton cerveau a besoin de défragmentation nocturne.</li>
                <li>✅ <strong>Nutrition</strong> : Manger, c’est coder en langage cellulaire.</li>
                <li>✅ <strong>Mouvement</strong> : Bouger, c’est déboguer ton corps.</li>
              </ul>
            </div>

            {/* Levier 2 : Systèmes Personnels */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4 text-center">🧩</div>
              <h3 className="font-semibold text-xl mb-2 text-center">Gestion des systèmes personnels</h3>
              <p className="text-gray-600 text-center">
                Ta vie est un écosystème. Arrête de jouer au jardinier avec une tronçonneuse.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✅ Cartographie des priorités (sans Excel).</li>
                <li>✅ Wu Wei appliqué au quotidien (l’art de ne pas forcer).</li>
                <li>✅ Acceptation + Action = Ta nouvelle équation.</li>
              </ul>
            </div>

            {/* Levier 3 : Acceptation */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl mb-4 text-center">🧘</div>
              <h3 className="font-semibold text-xl mb-2 text-center">Acceptation & Action</h3>
              <p className="text-gray-600 text-center">
                Lâcher prise ≠ abandonner. C’est cesser de nager à contre-courant.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>✅ Identifier tes "fils invisibles" (ce qui te tire dans tous les sens).</li>
                <li>✅ Transformer tes "problèmes" en leviers.</li>
                <li>✅ Agir sans forcer (le Wu Wei en pratique).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Offres" */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Tes options pour avancer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Offre 1 : Débugge Ton Quotidien */}
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gold-200">
            <h3 className="font-semibold text-xl mb-2 text-center">Débugge Ton Quotidien</h3>
            <p className="text-gray-600 text-center mb-4">3 séances pour identifier tes nœuds et les détendre.</p>
            <div className="text-2xl font-bold text-gold-200 text-center mb-4">197€</div>
            <Link
              href="/contact"
              className="block bg-gold-200 text-blue-900 px-4 py-2 rounded-full text-center font-medium hover:bg-gold-300 transition-colors"
            >
              Je veux essayer
            </Link>
          </div>

          {/* Offre 2 : Architecte de Ta Vie */}
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gold-200">
            <h3 className="font-semibold text-xl mb-2 text-center">Architecte de Ta Vie</h3>
            <p className="text-gray-600 text-center mb-4">6 mois pour redessiner ton système personnel.</p>
            <div className="text-2xl font-bold text-gold-200 text-center mb-4">1 200€</div>
            <Link
              href="/contact"
              className="block bg-gold-200 text-blue-900 px-4 py-2 rounded-full text-center font-medium hover:bg-gold-300 transition-colors"
            >
              Je veux transformer ma vie
            </Link>
          </div>

          {/* Offre 3 : Le Labo */}
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gold-200">
            <h3 className="font-semibold text-xl mb-2 text-center">Le Labo</h3>
            <p className="text-gray-600 text-center mb-4">Ateliers thématiques (respiration, sommeil, etc.).</p>
            <div className="text-2xl font-bold text-gold-200 text-center mb-4">47€/atelier</div>
            <Link
              href="/contact"
              className="block bg-gold-200 text-blue-900 px-4 py-2 rounded-full text-center font-medium hover:bg-gold-300 transition-colors"
            >
              Je veux explorer
            </Link>
          </div>
        </div>
      </section>

      {/* Quiz Interactif (version simple) */}
      <section className="bg-gradient-to-r from-purple-800 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Quel est ton rapport à la complexité ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réponds à ces 3 questions pour découvrir ton profil (et comment je peux t’aider).
          </p>
          <div className="inline-block bg-gold-200 text-blue-900 px-8 py-4 rounded-full font-medium hover:bg-gold-300 transition-colors">
            <Link href="https://forms.gle/TON_LIEN_GOOGLE_FORM" target="_blank" rel="noopener noreferrer">
              Je fais le quiz (2 min)
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Ton système t’attend.<br />
            <span className="italic">Et si tu l’écoutais, pour une fois ?</span>
          </h2>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-900 to-purple-800 text-white px-10 py-4 rounded-full font-medium hover:from-purple-800 hover:to-blue-900 transition-colors"
            >
              On explore ensemble ?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
