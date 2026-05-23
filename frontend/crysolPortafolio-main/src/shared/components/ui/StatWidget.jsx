const StatWidget = ({ label, value, hint, color = 'emerald' }) => {
  const tones = {
    emerald: 'from-emerald-500/10 to-emerald-50 border-emerald-200',
    amber: 'from-amber-500/10 to-amber-50 border-amber-200',
    rose: 'from-rose-500/10 to-rose-50 border-rose-200',
  }

  return (
    <article className={`rounded-xl border bg-gradient-to-br p-4 ${tones[color] || tones.emerald}`}>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    </article>
  )
}

export default StatWidget
