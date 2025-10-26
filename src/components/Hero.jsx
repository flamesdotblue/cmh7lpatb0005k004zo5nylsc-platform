import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-rose-50 via-white to-white" />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <svg className="absolute -top-24 left-1/2 -translate-x-1/2 h-[32rem] w-[64rem] text-rose-100" viewBox="0 0 1200 600" fill="currentColor">
            <ellipse cx="600" cy="300" rx="600" ry="300" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">Kodevs — Modern Software Studio</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">We design, build, and scale digital products</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">Web, mobile, and cloud engineered for performance and reliability. Partner with a team that ships fast without sacrificing quality.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Start a project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">Explore services</a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 text-sm text-slate-600 sm:grid-cols-4">
          <div>
            <p className="font-semibold text-slate-900">120+ launches</p>
            <p>Across web & mobile</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">7+ years</p>
            <p>Delivering outcomes</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">99.9% uptime</p>
            <p>Managed cloud stacks</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Global</p>
            <p>Remote‑first team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
