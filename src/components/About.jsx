function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Kodevs</h2>
            <p className="mt-4 text-slate-700">
              We are a distributed team of engineers, designers, and product thinkers who partner with founders and enterprises to ship reliable, elegant software. Our approach blends strong engineering fundamentals with pragmatic product sense.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-slate-900">Agile</p>
                <p className="text-sm text-slate-600">Iterative delivery</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-slate-900">Quality</p>
                <p className="text-sm text-slate-600">Tests & reviews</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-slate-900">Secure</p>
                <p className="text-sm text-slate-600">Best practices</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                <p className="text-2xl font-extrabold text-slate-900">Transparent</p>
                <p className="text-sm text-slate-600">Open comms</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-0 rounded-3xl bg-gradient-to-tr from-rose-200/60 to-rose-100/20 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-slate-100" />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">Our modular approach lets teams move faster without sacrificing reliability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
