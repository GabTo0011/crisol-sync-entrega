import { NavLink } from 'react-router-dom'

const AppSidebar = ({ items }) => {
  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white p-4 lg:block">
        <div className="mb-6 rounded-xl bg-emerald-600 p-3 text-center text-sm font-bold tracking-wide text-white">
          CRYSOL
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center rounded-lg px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 p-2 backdrop-blur lg:hidden">
        <ul className="grid grid-cols-4 gap-1 text-xs">
          {items.slice(0, 4).map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex min-h-10 items-center justify-center rounded-lg px-2 text-center ${isActive ? 'bg-emerald-100 font-semibold text-emerald-700' : 'text-slate-600'}`
                }
              >
                {item.shortLabel || item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default AppSidebar
