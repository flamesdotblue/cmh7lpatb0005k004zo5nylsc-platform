import React, { useState } from 'react';

export default function TechNavbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#showcase', label: 'Showcase' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-600 text-white font-bold">K</span>
            <span className="text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white">Kodevs.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-rose-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Get a quote</a>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md bg-rose-600 px-3 py-2 text-base font-semibold text-white hover:bg-rose-500"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
