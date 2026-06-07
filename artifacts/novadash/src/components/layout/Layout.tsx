import { Header } from './Header';
import { Footer } from './Footer';
import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nd-modern min-h-[100dvh] flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
