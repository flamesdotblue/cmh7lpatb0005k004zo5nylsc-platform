import React from 'react';

export default function CodeShowcase() {
  return (
    <section id="showcase" className="border-t border-white/10 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for developers</h2>
          <p className="mt-3 text-slate-400">Clean patterns, great DX, and production‑grade foundations from day one.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <CodeWindow title="api/routes/users.ts">
{`import { H3Event } from 'h3';
import { db } from '@/lib/db';
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });

export default async function handle(event: H3Event) {
  const body = await readBody(event);
  const { email } = schema.parse(body);

  const user = await db.user.upsert({
    where: { email },
    update: {},
    create: { email },
  });

  return { id: user.id, email: user.email };
}
`}
          </CodeWindow>

          <CodeWindow title="terminal" right>
{`$ pnpm i
$ pnpm test
$ pnpm deploy

✓ typecheck passed
✓ 128 tests passed (2 skipped)
✓ deployed in 34s to prod (us-east-1)
`}
          </CodeWindow>
        </div>

        <div id="contact" className="mt-12 grid gap-4 sm:grid-cols-3">
          <a href="#" className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-slate-300 hover:bg-white/[0.06]">Architecture Review</a>
          <a href="#" className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-slate-300 hover:bg-white/[0.06]">Security & Compliance</a>
          <a href="#" className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-slate-300 hover:bg-white/[0.06]">Get a Proposal</a>
        </div>
      </div>
    </section>
  );
}

function CodeWindow({ title, children, right = false }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl ring-1 ring-white/5 ${right ? 'lg:order-last' : ''}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-xs font-medium text-slate-300">{title}</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-slate-500">Kodevs</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-200"><code className="font-mono">{children}</code></pre>
    </div>
  );
}
