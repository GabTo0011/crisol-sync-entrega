import { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = ({ items, isOpen, onClose, showOnTablet = false }) => {
  if (!isOpen) return null

  const mobileHiddenClass = showOnTablet ? 'lg:hidden' : 'md:hidden'

  return (
    <>
      <div
        className={`fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-sm ${mobileHiddenClass}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`fixed inset-x-0 top-16 z-50 border-b border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900 ${mobileHiddenClass}`}>
        <ul className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
          {items.map((item) => (
            <li key={item.to}>
              {item.onClick ? (
                <button
                  type="button"
                  onClick={() => {
                    item.onClick()
                    onClose()
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-slate-700 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span className="flex h-6 w-6 items-center justify-center">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ) : (
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  <span className="flex h-6 w-6 items-center justify-center">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

/**
 * Header navegable reutilizable para móvil y desktop.
 * Muestra título, hamburguesa con menú expandible en móvil, y tema.
 * @param {string} title Título del header.
 * @param {Array} navigationItems Items de navegación completos.
 * @param {number} primaryItemsCount Items principales para footer (móvil).
 * @param {Function} onLogout Callback logout.
 * @returns {JSX.Element} Header sticky reutilizable.
 */
const TopNav = ({
  title,
  navigationItems = [],
  primaryItemsCount = 3,
  onLogout,
  isDark,
  toggleTheme,
  className = '',
  showOnTablet = false,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const primaryItems = navigationItems.slice(0, primaryItemsCount)
  const secondaryItems = navigationItems.slice(primaryItemsCount)
  const mobileHiddenClass = showOnTablet ? 'lg:hidden' : 'md:hidden'

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      <header className={`sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-6 dark:border-slate-800 dark:bg-slate-900/95 ${className}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleMenuToggle}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 ${mobileHiddenClass} dark:text-slate-300 dark:hover:bg-slate-800`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </>
                )}
              </svg>
            </button>

            <div>
              <h1 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-slate-100">{title}</h1>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            className="flex h-10 w-10 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        items={[
          ...secondaryItems,
          {
            to: '#logout',
            label: 'Salir',
            icon: (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></svg>
            ),
            onClick: onLogout,
          },
        ]}
        isOpen={menuOpen}
        onClose={handleMenuClose}
        showOnTablet={showOnTablet}
      />
    </>
  )
}

export default TopNav
