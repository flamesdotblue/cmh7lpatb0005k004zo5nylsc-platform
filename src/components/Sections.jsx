import { Code, Smartphone, Cloud, Shield, Rocket, Server, Check, ArrowRight } from 'lucide-react';

export default function Sections() {
  return (
    <div className="relative space-y-0">
      <About />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <FAQ />
      <Contact />
      <CTA />
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`mx-auto ${align === 'center' ? 'text-center' : ''} max-w-2xl`}> 
      {eyebrow && (
        <p className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <SectionHeader
            eyebrow="About"
            title="We blend product thinking with engineering excellence"
            subtitle="A senior, distributed team that owns outcomes. We prototype quickly, validate with real users, and ship with quality and security baked in."
            align="left"
          />
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="font-semibold text-slate-900">Core stack</dt>
              <dd className="mt-1 text-slate-700">React, Next.js, Node, Python, Postgres, AWS</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Practices</dt>
              <dd className="mt-1 text-slate-700">CI/CD, IaC, E2E testing, Observability</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Industries</dt>
              <dd className="mt-1 text-slate-700">Fintech, Health, SaaS, Retail, AI</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Engagements</dt>
              <dd className="mt-1 text-slate-700">MVPs, team augmentation, greenfield, rescue</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-rose-200/60 to-rose-100/20 blur-2xl" />
          <div className="grid grid-cols-3 gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-slate-100" />
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-600">Design systems, stable APIs, and cloud that scales when you do.</p>
        </div>
      </div>
    </section>
  );
}

const serviceItems = [
  {
    icon: Code,
    title: 'Web Applications',
    desc: 'SEO-friendly, accessible, high-performance apps with great DX.',
    bullets: ['React & Next.js', 'Design systems & UI engineering', 'E2E testing & performance'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Cross-platform apps with near-native performance and delightful UX.',
    bullets: ['React Native & Expo', 'App store delivery', 'Analytics & growth loops'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure with automation, security and observability.',
    bullets: ['AWS, GCP, Vercel', 'Kubernetes & serverless', 'Monitoring & incident response'],
  },
  {
    icon: Server,
    title: 'APIs & Platforms',
    desc: 'Versioned APIs, events and workflows that power ecosystems.',
    bullets: ['REST & GraphQL', 'Webhooks & events', 'Rate limiting & auth'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Secure SDLC and defense-in-depth patterns baked into delivery.',
    bullets: ['SSO, OAuth, JWT', 'Pen testing & hardening', 'SOC2 readiness'],
  },
  {
    icon: Rocket,
    title: 'MVP to Scale',
    desc: 'Lean discovery, rapid sprints, and data-driven iteration.',
    bullets: ['User research', 'Prototyping', 'Roadmaps & OKRs'],
  },
];

function Services() {
  return (
    <section id="services" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="End‑to‑end capabilities to build and run your product"
            subtitle="From concept to cloud, we cover strategy, design, engineering, and operations."
            align="left"
          />
          <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">Get a quote</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map(({ icon: Icon, title, desc, bullets }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-100 text-rose-700"><Check className="h-3 w-3" /></span>
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

const steps = [
  { title: 'Discover', desc: 'Stakeholder interviews, goals, risks, and success metrics.' },
  { title: 'Design', desc: 'Flows, wireframes, high‑fidelity UI, and prototypes.' },
  { title: 'Develop', desc: 'Sprint delivery with CI/CD, QA, and code reviews.' },
  { title: 'Deliver', desc: 'Launch, monitor, and iterate based on insights.' },
];

function Process() {
  return (
    <section id="process" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Process" title="A clear, collaborative way of working" subtitle="Transparent timelines, ownership, and communication, from kickoff to launch." />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-sm font-semibold text-rose-700">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Work() {
  const cases = [
    {
      tag: 'Fintech',
      title: 'Payments dashboard that boosted LTV by 21%',
      desc: 'Redesigned UI, improved onboarding, added reconciliation and alerts. Shipped v1 in 10 weeks.',
      metrics: ['+21% LTV', '−35% churn risk', 'NPS 68'],
    },
    {
      tag: 'Health',
      title: 'HIPAA‑ready telehealth platform scaled to 50k MAU',
      desc: 'Secure architecture, video consults, and EHR integrations with robust audit trails.',
      metrics: ['50k MAU', '99.95% uptime', 'SOC2 ready'],
    },
    {
      tag: 'SaaS',
      title: 'AI‑powered knowledge base with 3× faster search',
      desc: 'Semantic indexing, fast UI, and usage analytics — reduced support tickets significantly.',
      metrics: ['3× faster', '−28% tickets', 'PMF in 4 months'],
    },
  ];

  return (
    <section id="work" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Work" title="Selected case studies" subtitle="Outcomes we shipped with our partners." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{c.tag}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-rose-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <li key={m} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{m}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$6,900',
      period: 'per month',
      highlight: false,
      features: ['Senior engineers', 'Weekly sprints', 'Design support', 'Async updates'],
    },
    {
      name: 'Growth',
      price: '$12,900',
      period: 'per month',
      highlight: true,
      features: ['Dedicated squad', 'Product & QA', 'Architecture reviews', 'Analytics & dashboards'],
    },
    {
      name: 'Scale',
      price: 'Custom',
      period: 'project based',
      highlight: false,
      features: ['Solution discovery', 'Security & compliance', 'SRE/DevOps', 'SLAs & support'],
    },
  ];

  return (
    <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Pricing" title="Flexible engagement models" subtitle="Clear value, predictable cadence, and measurable outcomes." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-6 shadow-sm ${p.highlight ? 'border-rose-300 bg-white ring-2 ring-rose-200' : 'border-slate-200 bg-white'}`}>
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                <span className="text-sm text-slate-600">{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-700"><Check className="h-3 w-3" /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How quickly can we start?', a: 'We typically onboard new projects within 1–2 weeks after a short discovery call and scope alignment.' },
    { q: 'Do you work with existing teams?', a: 'Yes. We regularly collaborate with in‑house engineers and designers, and can augment your team or own streams end‑to‑end.' },
    { q: 'What about IP and confidentiality?', a: 'All work is performed under MNDA/MSA. You retain full IP rights to deliverables.' },
    { q: 'How do you ensure quality?', a: 'We use code reviews, automated testing, CI/CD, and observability from day one to maintain quality and reliability.' },
  ];

  return (
    <section id="faq" className="border-t border-slate-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Answers to common questions" />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-medium text-slate-900">{f.q}</p>
              <p className="mt-2 text-sm text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something great"
            subtitle="Share your goals. We typically respond within 1 business day."
            align="left"
          />
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            <li><span className="font-semibold text-slate-900">Email:</span> hello@kodevs.com</li>
            <li><span className="font-semibold text-slate-900">HQ:</span> Remote‑first, global</li>
            <li><span className="font-semibold text-slate-900">Availability:</span> New projects in 1–2 weeks</li>
          </ul>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">First name</label>
              <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" placeholder="Jane" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Last name</label>
              <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" placeholder="Doe" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Company</label>
            <input type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" placeholder="Acme Inc." />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Work email</label>
            <input type="email" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" placeholder="you@company.com" />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Project details</label>
            <textarea rows="5" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" placeholder="Timeline, budget, goals..." />
          </div>
          <div className="mt-6">
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500">Request proposal</button>
          </div>
          <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our terms and privacy policy.</p>
        </form>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-rose-600 py-16">
      <div className="absolute -inset-y-10 -left-10 -rotate-6 opacity-20">
        <div className="h-40 w-[150%] rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">Have a challenge in mind?</h3>
            <p className="mt-2 text-rose-50">We’ll help you scope a solution and ship with confidence.</p>
          </div>
          <div className="flex sm:justify-end">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-rose-700 shadow-sm hover:bg-rose-50">Talk to our team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
