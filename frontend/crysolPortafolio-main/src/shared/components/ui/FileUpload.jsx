const FileUpload = ({ label, accept, onChange, helper, error }) => {
  return (
    <label className="block">
      {label ? <span className="mb-1 block text-sm font-medium text-slate-700 sm:text-xs dark:text-slate-300">{label}</span> : null}
      <input
        type="file"
        accept={accept}
        onChange={(event) => onChange?.(event.target.files?.[0] || null)}
        className="block w-full rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-base text-slate-600 file:mr-3 file:rounded-md file:border-0 file:bg-emerald-600 file:px-3 file:py-2 file:text-base file:font-semibold file:text-white hover:file:bg-emerald-700 sm:text-sm sm:file:text-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
      />
      {helper ? <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">{helper}</span> : null}
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  )
}

export default FileUpload
