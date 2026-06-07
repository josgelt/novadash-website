import { Header } from './Header';
import { Footer } from './Footer';
import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nd-botanical min-h-[100dvh] flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-primary)] selection:text-white">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
