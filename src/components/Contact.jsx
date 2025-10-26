function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-rose-50/70 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s build something extraordinary</h2>
            <p className="mt-2 text-slate-600">Tell us about your goals. We’ll follow up within 1 business day.</p>
          </div>

          <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input type="text" name="name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Company</label>
              <input type="text" name="company" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" placeholder="Acme Inc." />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Project details</label>
              <textarea name="details" rows="5" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none" placeholder="What are you looking to build?" />
            </div>
            <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">By submitting, you consent to be contacted about your request.</p>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Request proposal</button>
            </div>
          </form>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-slate-700">Email</p>
              <a href="mailto:hello@kodevs.com" className="text-slate-900 hover:underline">hello@kodevs.com</a>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">HQ</p>
              <p className="text-slate-900">Remote • Worldwide</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Availability</p>
              <p className="text-slate-900">New projects in 1–2 weeks</p>
            </div>
          </div>
        </div>

        <footer className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Kodevs. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
            <a href="#services" className="text-slate-600 hover:text-slate-900">Services</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
