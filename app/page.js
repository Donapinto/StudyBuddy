"use client";

import Link from "next/link";
import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { StatCard } from "@/components/StatCard";
import { useStudyBuddy } from "@/context/StudyBuddyContext";

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

const statusStyles = {
  Planned: "bg-sky-100 text-sky-700",
  "In progress": "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
};

const initialForm = {
  title: "",
  subject: "",
  due: "Today",
  status: "Planned",
};

export default function Home() {
  const { stats, tasks, addTask, removeTask } = useStudyBuddy();
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(form);
    setForm(initialForm);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />

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
            <div className="mt-5 grid gap-4">
              {stats.map((item) => (
                <StatCard
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  change={item.change}
                  tone={item.tone}
                />
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

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-900">Upcoming tasks</h3>
            <Link href="/tasks" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Manage tasks →
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-2 xl:grid-cols-5">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="My task title"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none ring-0 transition focus:border-indigo-400"
              required
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none ring-0 transition focus:border-indigo-400"
              required
            />
            <input
              type="text"
              name="due"
              value={form.due}
              onChange={handleChange}
              placeholder="Due date"
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none ring-0 transition focus:border-indigo-400"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
            >
              <option value="Planned">Planned</option>
              <option value="In progress">In progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Add task
            </button>
          </form>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-600">
                    {task.subject}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeTask(task.id)}
                    className="rounded-full border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-red-600 transition hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${statusStyles[task.status] ?? "bg-slate-200 text-slate-700"}`}>
                    {task.status}
                  </span>
                </div>
                <p className="mt-3 text-base font-semibold text-slate-900">{task.title}</p>
                <p className="mt-2 text-sm text-slate-500">Due {task.due}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
