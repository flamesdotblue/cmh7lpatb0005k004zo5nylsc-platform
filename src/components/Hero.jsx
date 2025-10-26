import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <nav className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-slate-900">Kodevs</a>
          <div className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-slate-700 hover:text-slate-900">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800 md:hidden">Get in touch</a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-24 sm:py-28 md:py-32 lg:py-40">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          We craft modern software for bold brands
        </h1>
        <p className="max-w-2xl text-lg text-slate-700">
          Kodevs is a full-stack software studio. We design, build, and ship high-performance web, mobile, and cloud solutions that scale with your business.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#contact" className="inline-flex items-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800">Start a project</a>
          <a href="#services" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Explore services</a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-slate-600 sm:grid-cols-4">
          <div>
            <p className="font-semibold text-slate-900">10+ years</p>
            <p>Combined experience</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">50+ projects</p>
            <p>Delivered successfully</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">99.9% uptime</p>
            <p>Across managed stacks</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Global</p>
            <p>Remote-first team</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
