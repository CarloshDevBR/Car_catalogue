import './globals.css';

import { Footer, NavBar } from '../components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cars Hub',
  description: 'Discover the best cars in the world.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
