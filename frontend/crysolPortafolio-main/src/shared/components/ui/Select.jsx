const Select = ({ label, id, options = [], error, className = '', ...props }) => {
  return (
    <label className="block">
      {label ? <span className="mb-1 block text-sm font-medium text-slate-700 sm:text-xs">{label}</span> : null}
      <select
        id={id}
        className={`h-10 w-full rounded-md border border-slate-400 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-800 ${className}`}
        {...props}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  )
}

export default Select
