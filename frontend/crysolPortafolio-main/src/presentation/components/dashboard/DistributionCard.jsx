import LegendItem from './LegendItem'
import Card from '../../../shared/components/ui/Card'

const DistributionCard = ({ title, description, totalLabel, totalValue, legendItems }) => {
  return (
    <Card title={title} subtitle={description}>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-around">
        <div className="relative h-40 w-40">
          <svg viewBox="0 0 36 36" className="h-full w-full">
            <path className="text-emerald-400" strokeDasharray="30, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" />
            <path className="text-emerald-300" strokeDasharray="20, 100" strokeDashoffset="-30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" />
            <path className="text-emerald-500" strokeDasharray="40, 100" strokeDashoffset="-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" />
            <path className="text-emerald-200" strokeDasharray="10, 100" strokeDashoffset="-90" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" />
          </svg>
        </div>

        <div className="mt-4 sm:mt-0">
          <div className="mb-4">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">{totalValue}</div>
            <div className="text-sm text-slate-500 sm:text-xs dark:text-slate-400">{totalLabel}</div>
          </div>

          <ul className="flex flex-col gap-2 text-sm sm:text-xs">
            {legendItems.map((item) => (
              <LegendItem key={item.label} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default DistributionCard