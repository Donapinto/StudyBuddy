export function ProgressRow({ code, subject, progress, hours, color = "from-indigo-500 to-violet-500" }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{code}</p>
          <p className="mt-2 text-base font-bold text-slate-900">{subject}</p>
        </div>
        <span className="text-sm font-semibold text-slate-700">{progress}%</span>
      </div>

      <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-600">{hours} logged this week</p>
    </div>
  );
}
