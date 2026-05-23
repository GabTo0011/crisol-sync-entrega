const tones = {
  activo: 'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200',
  invitado: 'border-sky-200 bg-sky-100 text-sky-700 dark:border-sky-900 dark:bg-sky-950/50 dark:text-sky-200',
  bloqueado: 'border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-200',
}

const AdminUserStatusBadge = ({ status }) => {
  const tone = tones[status] || 'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'

  return (
    <span className={`inline-flex min-w-[96px] items-center justify-center rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${tone}`}>
      {status}
    </span>
  )
}

export default AdminUserStatusBadge
