import { Code, Smartphone, Cloud, Rocket, Shield, Server } from 'lucide-react';

const services = [
  {
    title: 'Web Applications',
    desc: 'High-performance, accessible, SEO-ready web apps built with modern frameworks.',
    icon: Code,
    bullets: ['React, Next.js, and Vue', 'Design systems & UI engineering', 'E2E testing & CI/CD'],
  },
  {
    title: 'Mobile Development',
    desc: 'Cross-platform iOS/Android apps with native performance and delightful UX.',
    icon: Smartphone,
    bullets: ['React Native & Expo', 'App store delivery', 'Analytics & growth loops'],
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Secure, scalable infrastructure with automation and observability baked in.',
    icon: Cloud,
    bullets: ['AWS, GCP, Vercel', 'Kubernetes & serverless', 'Monitoring & incident response'],
  },
  {
    title: 'MVP to Scale',
    desc: 'Rapid prototyping, user validation, and a clear path to product-market fit.',
    icon: Rocket,
    bullets: ['Lean discovery', 'Rapid sprints', 'Data-driven iteration'],
  },
  {
    title: 'Security & Compliance',
    desc: 'Defense in depth, secure SDLC, and compliance-ready architectures.',
    icon: Shield,
    bullets: ['SSO, OAuth, JWT', 'Pen testing & hardening', 'SOC2 readiness'],
  },
  {
    title: 'APIs & Platforms',
    desc: 'Robust, versioned APIs and platform workflows for your ecosystem.',
    icon: Server,
    bullets: ['REST & GraphQL', 'Webhooks & events', 'Rate limiting & auth'],
  },
];

function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            End-to-end capabilities to design, build, and run your products with confidence.
          </p>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">Get a quote</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, desc, icon: Icon, bullets }) => (
          <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
            <ul className="mt-4 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
