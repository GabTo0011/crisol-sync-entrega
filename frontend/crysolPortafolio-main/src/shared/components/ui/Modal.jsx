const Modal = ({ open, title, children, onClose, onConfirm, confirmLabel = 'Confirmar', cancelLabel = 'Cancelar' }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-slate-900/40 p-3 sm:items-center sm:justify-center dark:bg-slate-950/75">
      <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-xl dark:border dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">{children}</div>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="h-10 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
            {cancelLabel}
          </button>
          <button type="button" onClick={onConfirm} className="h-10 rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700">
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
