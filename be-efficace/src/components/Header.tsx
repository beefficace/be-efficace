"use client"; // This is important for using hooks like useState

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Nom */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold italic">Be</span>
          <span className="text-2xl font-bold">Efficace</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/individus" className="hover:text-gold-200 transition-colors">Individus</Link>
          <Link href="/entreprises" className="hover:text-gold-200 transition-colors">Entreprises</Link>
          <Link href="/a-propos" className="hover:text-gold-200 transition-colors">À Propos</Link>
          <Link href="/blog" className="hover:text-gold-200 transition-colors">Blog</Link>
          <Link href="/contact" className="bg-gold-200 text-blue-900 px-4 py-2 rounded-full hover:bg-gold-300 transition-colors font-medium">
            On discute ?
          </Link>
        </nav>

        {/* Menu Mobile (Burger) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 py-2">
          <Link href="/individus" className="block py-2 hover:text-gold-200">Individus</Link>
          <Link href="/entreprises" className="block py-2 hover:text-gold-200">Entreprises</Link>
          <Link href="/a-propos" className="block py-2 hover:text-gold-200">À Propos</Link>
          <Link href="/blog" className="block py-2 hover:text-gold-200">Blog</Link>
          <Link href="/contact" className="block py-2 bg-gold-200 text-blue-900 rounded-full mt-2 text-center font-medium">
            On discute ?
          </Link>
        </div>
      )}
    </header>
  );
}
