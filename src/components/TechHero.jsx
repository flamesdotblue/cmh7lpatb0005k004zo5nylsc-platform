import React from 'react';

export default function TechHero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(244,63,94,0.12),rgba(2,6,23,0)_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),transparent)]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <svg className="h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">Kodevs · Technical Software Studio</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Build. Ship. Scale.
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            We design and engineer reliable web, mobile, and cloud software with a developer‑first mindset: performance, security, and DX from day one.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Start a project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10">Explore services</a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-slate-400 sm:grid-cols-4">
          <Metric label="Launches" value="120+" />
          <Metric label="Experience" value="7+ yrs" />
          <Metric label="Uptime" value="99.9%" />
          <Metric label="Model" value="Remote‑first" />
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="font-semibold text-slate-200">{value}</p>
      <p>{label}</p>
    </div>
  );
}
