import Card from '../../../shared/components/ui/Card'

const EvolutionCard = ({ title, description, stats, targetLabel, periodLabel }) => {
  return (
    <Card title={title} subtitle={description}>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col gap-3 sm:w-1/3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="font-bold text-slate-900 dark:text-slate-100">{stat.value}</div>
              <div className="text-sm text-slate-500 sm:text-xs dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="mb-4 flex justify-between text-xs text-slate-500 sm:text-[10px] dark:text-slate-400">
            <span>{targetLabel}</span>
            <span>{periodLabel}</span>
          </div>

          <div className="relative h-36 w-full border-b border-l border-slate-200 sm:h-28 dark:border-slate-700">
            <div className="absolute top-1/3 w-full border-t border-dashed border-red-400" />

            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <polyline fill="none" stroke="#27333d" strokeWidth="2" points="0,50 15,20 30,80 45,85 60,82 75,25 90,60 100,40" />
              <circle cx="15" cy="20" r="2" fill="#27333d" />
              <circle cx="30" cy="80" r="2" fill="#27333d" />
              <circle cx="45" cy="85" r="2" fill="#27333d" />
              <circle cx="60" cy="82" r="2" fill="#27333d" />
              <circle cx="75" cy="25" r="2" fill="#27333d" />
              <circle cx="90" cy="60" r="2" fill="#27333d" />
            </svg>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default EvolutionCard