import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="relative bg-gradient-to-br from-blue-900 to-purple-800 text-white overflow-hidden">
        {/* The user mentioned a background texture, but the link is not real. I will omit this for now. */}
        {/* <div className="absolute inset-0 bg-[url('https://be-efficace.com/background-texture.png')] bg-cover bg-center opacity-10"></div> */}

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-gold-200 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
              🧠 La complexité n'est pas un problème, c'est une danse
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ton problème n’est <span className="italic">pas</span> compliqué.<br />
              Il est <span className="text-gold-200">complexe</span>. Et c’est une excellente nouvelle.
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Bienvenue dans le laboratoire où la rigueur systémique rencontre la poésie du lâcher-prise.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/individus"
                className="bg-gold-200 text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-gold-300 transition-colors shadow-lg"
              >
                Je veux dompter mon chaos
              </Link>
              <Link
                href="/entreprises"
                className="border-2 border-gold-200 text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-colors"
              >
                Mon entreprise a besoin d’aide
              </Link>
            </div>

            <div className="mt-12">
              {/* Using a placeholder for the illustration */}
              <Image
                src="https://via.placeholder.com/800x400/30478A/FFFFFF?text=Illustration+Ecosysteme"
                alt="Écosystème complexe avec fils lumineux"
                width={800}
                height={400}
                className="rounded-xl shadow-2xl mx-auto"
              />
              <p className="mt-2 text-sm italic opacity-70">
                <em>Un système où chaque élément est connecté – comme ta vie.</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
