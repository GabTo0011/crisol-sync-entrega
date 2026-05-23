import Input from '../../../shared/components/ui/Input'

const FiltersBar = () => {
  return (
    <section className="space-y-3">
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <Input
          label="Buscar"
          placeholder="Busque sus cursos"
          defaultValue=""
          leadingIcon={(
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          )}
        />
        <FilterSelect label="Períodos" value="Todos los períodos" />
        <FilterSelect label="Filtros" value="Todos los cursos" />
      </div>
    </section>
  )
}

const FilterSelect = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-slate-600 dark:text-slate-300">{label}</label>
    <div className="relative">
      <select
        defaultValue={value}
        className="h-10 w-full appearance-none rounded-md border border-slate-400 bg-white px-3 pr-10 text-sm text-slate-700 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-slate-500 dark:focus:ring-slate-800"
      >
        <option value={value}>{value}</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500 dark:text-slate-400">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </div>
    </div>
  </div>
)

export default FiltersBar