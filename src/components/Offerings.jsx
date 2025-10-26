import React from 'react';
import { Rocket, Server, Cloud, Shield } from 'lucide-react';

const items = [
  {
    title: 'Product Engineering',
    desc: 'Modern, accessible, and fast frontends with robust APIs.',
    icon: Rocket,
    bullets: ['React/Next.js UI', 'Design systems', 'E2E tests & CI/CD'],
  },
  {
    title: 'Platform & APIs',
    desc: 'Versioned REST/GraphQL and event‑driven integrations.',
    icon: Server,
    bullets: ['Auth & SSO', 'Rate limiting', 'Observability'],
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Scalable infra with automation, metrics, and alerts.',
    icon: Cloud,
    bullets: ['AWS/GCP/Vercel', 'K8s & serverless', 'IaC (Terraform)'],
  },
  {
    title: 'Security by Design',
    desc: 'Secure SDLC and compliance‑ready architectures.',
    icon: Shield,
    bullets: ['OWASP best practices', 'Secrets & policies', 'SOC2 readiness'],
  },
];

export default function Offerings() {
  return (
    <section id="services" className="border-t border-white/10 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical services for modern teams</h2>
          <p className="mt-3 text-slate-400">End‑to‑end capabilities to design, build, and run production systems with confidence.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon, bullets }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm ring-1 ring-white/5 transition hover:bg-white/[0.05]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{desc}</p>
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-rose-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
