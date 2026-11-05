const toneStyles = {
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-violet-50 text-violet-700",
  emerald: "bg-emerald-50 text-emerald-700",
  amber: "bg-amber-50 text-amber-700",
  cyan: "bg-cyan-50 text-cyan-700",
};

export function StatCard({ label, value, change, tone = "blue" }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm text-slate-500">{label}</span>
        <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${toneStyles[tone] ?? toneStyles.blue}`}>
          {change}
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
