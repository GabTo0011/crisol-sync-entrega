const MetricCard = ({ title, badge, value, subtitle, trend }) => (
  <div className="flex min-h-36 flex-col justify-between rounded-xl border border-emerald-700/30 bg-gradient-to-b from-[#2f6b57] to-[#2b604f] p-4 text-white shadow-sm">
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">{title}</span>
      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">{badge}</span>
    </div>

    <div className="my-3 text-[2rem] font-bold leading-none sm:text-2xl">{value}</div>

    <div className="flex items-end justify-between text-xs sm:text-[11px]">
      <span className="text-white/80">{subtitle}</span>
      <span className="font-semibold text-white/90">{trend}</span>
    </div>
  </div>
)

export default MetricCard