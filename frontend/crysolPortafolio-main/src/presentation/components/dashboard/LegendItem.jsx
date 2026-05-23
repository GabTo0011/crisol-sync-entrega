const LegendItem = ({ color, label, percent }) => (
  <li className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="text-sm text-slate-600 sm:text-xs dark:text-slate-300">{label}</span>
    </div>
    <span className="text-sm text-slate-400 sm:text-xs dark:text-slate-500">{percent}</span>
  </li>
)

export default LegendItem