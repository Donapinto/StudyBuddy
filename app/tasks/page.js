"use client";

import Link from "next/link";
import { useState } from "react";

import { Navbar } from "@/components/Navbar";
import { useStudyBuddy } from "@/context/StudyBuddyContext";

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

export default function TasksPage() {
  const { tasks, addTask, removeTask } = useStudyBuddy();
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
    <main className="min-h-screen bg-slate-100 px-6 py-8 text-slate-900">
      <Navbar />

      <div className="mx-auto max-w-6xl pt-8">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Task planner
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">My tasks</h1>
          </div>

          <Link
            href="/"
            className="inline-flex w-fit items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Back to dashboard
          </Link>
        </header>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Add your task</h2>

          <form onSubmit={handleSubmit} className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Task title"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
              required
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
              required
            />
            <input
              type="text"
              name="due"
              value={form.due}
              onChange={handleChange}
              placeholder="Due date"
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
            />
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400"
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
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Your task list</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
        </section>
      </div>
    </main>
  );
}
