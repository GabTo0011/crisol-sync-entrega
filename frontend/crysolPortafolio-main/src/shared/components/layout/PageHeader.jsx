/**
 * PageHeader Component
 * Sticky header bar para páginas autenticadas.
 * Mobile-first: responsive padding, sticky positioning.
 * @module PageHeader
 */

import { useThemeMode } from '../../context/ThemeContext'

/**
 * Componente reutilizable de header para páginas.
 * @param {Object} props Props del componente.
 * @param {string} props.title Título principal de la página.
 * @param {string} [props.subtitle] Subtítulo o descripción (opcional).
 * @returns {JSX.Element} Header sticky con título.
 */
const PageHeader = ({ title, subtitle }) => {
  const { isDark, toggleTheme } = useThemeMode();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-6 dark:border-slate-800 dark:bg-slate-900/95">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-bold text-slate-900 sm:text-3xl dark:text-slate-100">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <button
          type="button"
          aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {isDark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 2v2m0 16v2M4 12H2m20 0h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default PageHeader
