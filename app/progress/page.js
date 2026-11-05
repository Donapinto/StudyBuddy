"use client";

import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { ProgressRow } from "@/components/ProgressRow";
import { StatCard } from "@/components/StatCard";
import { useStudyBuddy } from "@/context/StudyBuddyContext";

const milestones = [
  "Completed 3 revision sessions for Mathematics and Java",
  "Improved practical performance by 12% compared to the previous week",
  "Finished all weekly exercises for Data Structures and Algorithms",
  "Maintained a consistent study streak across the current semester plan",
];

export default function ProgressPage() {
  const { stats, subjects, tasks } = useStudyBuddy();

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-8 text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-6xl pt-8">
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

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => (
            <StatCard
              key={item.label}
              label={item.label}
              value={item.value}
              change={item.change}
              tone={item.tone}
            />
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Current semester overview</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {subjects.map((subject) => (
              <div key={subject.code} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-violet-600">
                  {subject.code}
                </p>
                <p className="mt-2 text-base font-bold text-slate-900">{subject.subject}</p>
                <p className="mt-1 text-sm text-slate-600">{subject.hours} logged this week</p>
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
              {subjects.map((subject) => (
                <ProgressRow
                  key={subject.code}
                  code={subject.code}
                  subject={subject.subject}
                  progress={subject.progress}
                  hours={subject.hours}
                  color={subject.color}
                />
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

            <div className="mt-6 rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Tasks</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">{tasks.length}</p>
              <p className="text-sm text-slate-600">Planned and active study items this week</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
