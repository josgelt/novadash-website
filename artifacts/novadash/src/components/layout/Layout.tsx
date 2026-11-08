import { Header } from './Header';
import { Footer } from './Footer';
import { HeaderClassic } from './HeaderClassic';
import { FooterClassic } from './FooterClassic';
import React from 'react';
import { useDesign } from '@/theme';

export function Layout({ children }: { children: React.ReactNode }) {
  const design = useDesign();
  return (
    <div className="nd-botanical min-h-[100dvh] flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-primary)] selection:text-[var(--color-bg)]">
      {design === 'classic' ? <HeaderClassic /> : <Header />}
      <main className="flex-1">
        {children}
      </main>
      {design === 'classic' ? <FooterClassic /> : <Footer />}
    </div>
  );
}
