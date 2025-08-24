import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold font-serif text-pale-gold">
          Be Efficace
        </h1>
        <p className="mt-4 text-xl font-sans">
          Naviguez la complexité avec la grâce du flow.
        </p>
        <p className="mt-2 text-lg font-sans">
          (Nous ne résolvons pas les problèmes, nous apprenons à danser avec le chaos.)
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-6">
        <Link href="/individual">
          <Button>Pour les Individus</Button>
        </Link>
        <Link href="/business">
          <Button>Pour les Entreprises</Button>
        </Link>
      </div>
    </main>
  );
}
