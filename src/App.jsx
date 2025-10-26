import React from 'react';
import TechNavbar from './components/TechNavbar.jsx';
import TechHero from './components/TechHero.jsx';
import Offerings from './components/Offerings.jsx';
import CodeShowcase from './components/CodeShowcase.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <TechNavbar />
      <main>
        <TechHero />
        <Offerings />
        <CodeShowcase />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-600 text-white font-bold">K</span>
            <span className="text-sm tracking-tight text-slate-300">Kodevs.dev</span>
          </div>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Kodevs — Modern software engineering studio.</p>
        </div>
      </footer>
    </div>
  );
}
