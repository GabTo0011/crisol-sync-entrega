import { NavLink } from 'react-router-dom'

/**
 * Barra de navegación inferior para móvil con items principales.
 * Desktop: oculta. Móvil: 3 items + botón logout.
 * @param {Array} items Items de navegación a mostrar.
 * @param {Function} onLogout Callback logout.
 * @returns {JSX.Element} Navbar sticky inferior.
 */
const BottomNav = ({ items = [], onLogout, className = '', showOnTablet = false }) => {
  const mobileHiddenClass = showOnTablet ? 'lg:hidden' : 'md:hidden'

  return (
    <nav className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur ${mobileHiddenClass} ${className} dark:border-slate-800 dark:bg-slate-900/95`}>
      <ul className="grid grid-cols-4 gap-1">
        {items.slice(0, 3).map((item) => (
          <li key={item.label}>
            {item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                title={item.label}
                className="flex min-h-12 w-full flex-col items-center justify-center rounded-lg px-2 text-center text-slate-600 transition hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <span className="mb-1 flex h-6 w-6 items-center justify-center">{item.icon}</span>
                <span className="text-xs">{item.shortLabel || item.label}</span>
              </button>
            ) : (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex min-h-12 flex-col items-center justify-center rounded-lg px-2 text-center transition ${
                    isActive
                      ? 'bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200'
                      : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                  }`
                }
                title={item.label}
              >
                <span className="mb-1 flex h-6 w-6 items-center justify-center">{item.icon}</span>
                <span className="text-xs">{item.shortLabel || item.label}</span>
              </NavLink>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={onLogout}
            aria-label="Salir"
            className="flex min-h-12 w-full flex-col items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
            title="Salir"
          >
            <span className="mb-1 flex h-6 w-6 items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></svg>
            </span>
            <span className="text-xs">Salir</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default BottomNav
