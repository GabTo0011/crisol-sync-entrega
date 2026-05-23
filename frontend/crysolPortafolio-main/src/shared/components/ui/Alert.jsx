const Alert = ({ tone = 'info', title, children }) => {
  const tones = {
    info: 'bg-sky-50 border-sky-200 text-sky-800 dark:bg-sky-950/40 dark:border-sky-900 dark:text-sky-200',
    warning: 'bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-900 dark:text-amber-200',
    danger: 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/40 dark:border-rose-900 dark:text-rose-200',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-900 dark:text-emerald-200',
  }

  return (
    <div className={`rounded-xl border px-3 py-2 text-sm ${tones[tone] || tones.info}`}>
      {title ? <p className="font-semibold">{title}</p> : null}
      <div>{children}</div>
    </div>
  )
}

export default Alert
