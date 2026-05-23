import { NavLink } from 'react-router-dom'
import { useState } from 'react'

/**
 * Barra lateral de navegación principal (desktop).
 * Móvil: oculta (TopNav + BottomNav manejan navegación).
 * @param {Array} items Items de navegación.
 * @param {Function} onLogout Callback logout.
 * @returns {JSX.Element} Sidebar expandible desktop.
 */
const Sidebar = ({ items = [], onLogout }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <aside
      className={`hidden h-screen shrink-0 flex-col overflow-x-hidden bg-[#27333d] py-4 transition-all duration-200 md:sticky md:top-0 md:flex ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="mb-6 mt-1 px-3">
        <div className="relative h-11 rounded-md">
          <div className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl bg-white/10 text-base font-bold text-white">
            C
          </div>
          <span
            className={`ml-12 block whitespace-nowrap pt-3 text-sm font-semibold tracking-wide text-white/90 transition-opacity duration-150 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            CRYSOL
          </span>
        </div>
      </div>

      <nav className="flex w-full flex-col gap-2 px-3">
        {items.map((item) => (
          <NavItem key={item.label} icon={item.icon} label={item.label} to={item.to} onClick={item.onClick} isExpanded={isExpanded} />
        ))}
      </nav>

      <div className="mt-auto px-3">
        <button
          type="button"
          onClick={onLogout}
          className="relative h-11 w-full overflow-hidden rounded-md px-2.5 text-left text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Salir"
        >
          <span className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></svg>
          </span>
          <span
            className={`ml-10 block whitespace-nowrap text-sm transition-opacity duration-150 ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Salir
          </span>
        </button>
      </div>
    </aside>
  )
}

const NavItem = ({ icon, label, to, onClick, isExpanded }) => {
  if (!to) {
    return (
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className="relative h-11 w-full overflow-hidden rounded-md px-2.5 text-left text-white/60 transition-colors hover:bg-white/5 hover:text-white"
      >
        <span className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center">{icon}</span>
        <span
          className={`ml-10 block whitespace-nowrap text-sm transition-opacity duration-150 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {label}
        </span>
      </button>
    )
  }

  return (
    <NavLink
      to={to}
      aria-label={label}
      className={({ isActive }) =>
        `relative block min-h-11 w-full overflow-hidden rounded-md px-2.5 py-1.5 transition-colors ${
          isActive ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      <span className="absolute left-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center">{icon}</span>
      <span
        className={`ml-10 flex min-w-0 flex-col transition-opacity duration-150 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="truncate text-sm font-medium">{label}</span>
        <span className="truncate text-xs text-white/50">{to}</span>
      </span>
    </NavLink>
  )
}

export default Sidebar