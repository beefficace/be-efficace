import Link from 'next/link';
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-linen text-gray-800">
      <header className="p-4 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-serif text-deep-blue">
            Be Efficace
          </Link>
          <Link href="/contact" className="text-pale-gold hover:underline">
            Contact
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold font-serif text-deep-blue mb-8">{title}</h1>
        <div className="prose lg:prose-xl">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
