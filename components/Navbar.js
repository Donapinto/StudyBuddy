import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tasks", label: "Tasks" },
  { href: "/timetable", label: "Timetable" },
  { href: "/progress", label: "Progress" },
];

export function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            StudyBuddy
          </p>
          <h1 className="text-lg font-bold text-slate-900">Student dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
