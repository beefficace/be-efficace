import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';

export default function ContactPage() {
  return (
    <PageLayout title="La Connexion Humaine">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="mb-4">
            Une question ? Une idée ? Envie de discuter ?
            Le plus simple, c'est de commencer une conversation.
            Remplis ce formulaire, et je te réponds personnellement. Pas de robot, pas de chichi.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-blue focus:border-deep-blue sm:text-sm"></textarea>
            </div>
            <Button type="submit">Envoyer</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-serif text-deep-blue mb-4">Planifier un appel</h2>
          <p className="mb-4">
            Si tu préfères, tu peux directement réserver un créneau dans mon agenda pour un appel découverte de 30 minutes. C'est gratuit et sans engagement.
          </p>
          <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-md">
            <p className="text-gray-500">[Placeholder for Calendly Embed]</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
