import Link from "next/link";

const metrics = [
  { label: "Study time", value: "18.5h", detail: "This week" },
  { label: "Average score", value: "88%", detail: "Across quizzes" },
  { label: "Focus streak", value: "12 days", detail: "Consistent work" },
  { label: "Goals met", value: "7/9", detail: "Completed" },
];

const subjectProgress = [
  { subject: "BMA301TC1 - Computational Mathematics", progress: 92, hours: "4.5h", color: "from-blue-500 to-cyan-500" },
  { subject: "BCS302G1 - Object Oriented Programming", progress: 86, hours: "3.8h", color: "from-violet-500 to-indigo-500" },
  { subject: "BCS303G1 - Digital Design & Computer Organization", progress: 78, hours: "3.2h", color: "from-emerald-500 to-teal-500" },
  { subject: "BCS304T1 - Operating Systems", progress: 81, hours: "2.6h", color: "from-amber-500 to-orange-500" },
  { subject: "BCS305T1 - Data Structures & Algorithms", progress: 88, hours: "4.1h", color: "from-pink-500 to-rose-500" },
  { subject: "BCS309P1 - Community Project", progress: 75, hours: "2.4h", color: "from-slate-500 to-gray-500" },
];

const milestones = [
  "Completed 3 revision sessions for BMA301TC1 and BCS302G1",
  "Improved Java lab performance by 12% compared to the previous assessment",
  "Finished all weekly exercises for Data Structures and Algorithms",
  "Maintained a consistent study streak across the 3D section timetable",
];

export default function ProgressPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-8 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Analytics
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Study progress</h1>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Back to dashboard
          </Link>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-emerald-600">
                {item.detail}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Semester 3D course overview</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { course: "BMA301TC1", title: "Computational Mathematics", faculty: "Mrs. Mary Jeney" },
              { course: "BCS302G1", title: "Object Oriented Programming", faculty: "Mrs. Srividya Bhat" },
              { course: "BCS303G1", title: "Digital Design & Computer Organization", faculty: "Mrs. Varsha M" },
              { course: "BCS304T1", title: "Operating Systems", faculty: "Mrs. Chaitra Shree" },
              { course: "BCS305T1", title: "Data Structures & Algorithms", faculty: "Dr. Poornima B" },
              { course: "BCS309P1", title: "Community Project", faculty: "Department" },
            ].map((item) => (
              <div key={item.course} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-600">{item.course}</p>
                <p className="mt-2 text-base font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.faculty}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Subject progress</h2>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-violet-700">
                Updated weekly
              </span>
            </div>

            <div className="space-y-5">
              {subjectProgress.map((subject) => (
                <div key={subject.subject}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-700">{subject.subject}</span>
                    <span className="text-slate-500">{subject.hours}</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${subject.color}`}
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-medium text-slate-500">
                    {subject.progress}% complete
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Recent milestones</h2>
            <ul className="mt-5 space-y-4">
              {milestones.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-violet-500" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
