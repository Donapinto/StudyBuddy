import Link from "next/link";

const overviewStats = [
  { label: "Study hours", value: "18.5h", change: "+2.4h" },
  { label: "Completion", value: "84%", change: "+8%" },
  { label: "Current streak", value: "12 days", change: "On track" },
];

const featureCards = [
  {
    title: "Timetable",
    description: "Review your weekly study schedule and plan each day with focus blocks.",
    href: "/timetable",
    accent: "from-sky-500 to-indigo-500",
  },
  {
    title: "Progress",
    description: "Track study stats, performance, and milestones across your learning goals.",
    href: "/progress",
    accent: "from-violet-500 to-fuchsia-500",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              StudyBuddy
            </p>
            <h1 className="text-lg font-bold text-slate-900">Student dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Home
            </Link>
            <Link
              href="/timetable"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Timetable
            </Link>
            <Link
              href="/progress"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Progress
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl shadow-indigo-200">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-100">
              Weekly overview
            </p>
            <h2 className="max-w-lg text-4xl font-bold leading-tight">
              Stay consistent and keep your study plan on track.
            </h2>
            <p className="mt-4 max-w-xl text-base text-indigo-50">
              Manage your timetable, monitor your focus, and measure progress with clear weekly insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/timetable"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                View timetable
              </Link>
              <Link
                href="/progress"
                className="rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Check progress
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              This week
            </p>
            <div className="mt-5 space-y-4">
              {overviewStats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{item.label}</span>
                    <span className="text-xs font-semibold text-emerald-600">{item.change}</span>
                  </div>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Features
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Your study planning tools</h3>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-2 bg-gradient-to-r ${card.accent}`} />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Dashboard
                </p>
                <h4 className="mt-3 text-2xl font-bold text-slate-900">{card.title}</h4>
                <p className="mt-3 text-slate-600">{card.description}</p>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-500">
                  Open page →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
