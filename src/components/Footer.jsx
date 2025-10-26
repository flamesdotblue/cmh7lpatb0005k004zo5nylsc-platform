import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-600 text-white font-bold">K</span>
              <span>Kodevs</span>
            </a>
            <p className="mt-3 text-sm text-slate-600 max-w-sm">Kodevs is a modern software studio. We design, build, and scale products for ambitious teams worldwide.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-slate-900">Company</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a className="hover:text-rose-600" href="#about">About</a></li>
                <li><a className="hover:text-rose-600" href="#services">Services</a></li>
                <li><a className="hover:text-rose-600" href="#home">Home</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Contact</p>
              <ul className="mt-2 space-y-2 text-slate-600">
                <li><a className="hover:text-rose-600" href="mailto:hello@kodevs.com">hello@kodevs.com</a></li>
                <li>Remote • Worldwide</li>
              </ul>
            </div>
          </div>
          <div className="flex items-end">
            <a href="#contact" className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Start a project</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Kodevs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-rose-600">Services</a>
            <a href="#about" className="hover:text-rose-600">About</a>
            <a href="#home" className="hover:text-rose-600">Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
