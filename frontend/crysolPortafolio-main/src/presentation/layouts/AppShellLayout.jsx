import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import TopNav from '../../shared/components/navigation/TopNav'
import BottomNav from '../../shared/components/navigation/BottomNav'
import { signOut } from '../../infrastructure/services/auth.service'
import { useThemeMode } from '../../shared/context/ThemeContext'

const navItems = [
  {
    to: '/dashboard',
    label: 'Inicio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.8V21h14V9.8" /><path d="M9.5 21v-6h5v6" /></svg>
    ),
  },
  {
    to: '/facturas',
    label: 'Facturas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 3h10a1 1 0 0 1 1 1v16l-2-1-2 1-2-1-2 1-2-1-2 1V4a1 1 0 0 1 1-1Z" /><path d="M9 8h6M9 12h6" /><path d="M9 16h3" /></svg>
    ),
  },
  {
    to: '/reportes',
    label: 'Reportes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V5m0 14h16M7 14l3-3 3 2 5-6" /></svg>
    ),
  },
  {
    to: '/administrador/usuarios',
    label: 'Admin',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></svg>
    ),
  },
  {
    to: '/boletas',
    label: 'Documentos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 12h6M9 16h6" /></svg>
    ),
  },
  {
    to: '/configuracion',
    label: 'Config',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m10.3 2.2-.6 2.1a8.3 8.3 0 0 0-1.9.8L5.8 4l-2 2 1.1 2a8.3 8.3 0 0 0-.8 1.9l-2.1.6v2.8l2.1.6c.2.7.5 1.3.8 1.9l-1.1 2 2 2 2-1.1c.6.3 1.2.6 1.9.8l.6 2.1h2.8l.6-2.1c.7-.2 1.3-.5 1.9-.8l2 1.1 2-2-1.1-2c.3-.6.6-1.2.8-1.9l2.1-.6V10.5l-2.1-.6a8.3 8.3 0 0 0-.8-1.9l1.1-2-2-2-2 1.1a8.3 8.3 0 0 0-1.9-.8l-.6-2.1h-2.8ZM12 15.6A3.6 3.6 0 1 0 12 8.4a3.6 3.6 0 0 0 0 7.2Z" /></svg>
    ),
  },
  {
    to: '/notificaciones',
    label: 'Alertas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5m6 0a3 3 0 0 1-6 0" /></svg>
    ),
  },
  {
    to: '/perfil',
    label: 'Perfil',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
  },
  {
    onClick: () => window.open('/terminos', '_blank'),
    label: 'Términos',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M7 7h10M7 11h10M7 15h6" /></svg>
    ),
  },
  {
    onClick: () => window.open('/politicas', '_blank'),
    label: 'Políticas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M7 8h2M7 12h2M7 16h2M10 8h7M10 12h7M10 16h3" /></svg>
    ),
  },
]

const titles = {
  '/dashboard': 'Dashboard financiero',
  '/boletas': 'Caja y boletas',
  '/boletas/nueva': 'Nueva boleta (OCR)',
  '/facturas': 'Facturas DTE',
  '/reportes': 'Exportación y reportes',
  '/administrador': 'Dashboard administrador',
  '/administrador/usuarios': 'Gestion de usuarios',
  '/configuracion': 'Configuración',
  '/notificaciones': 'Notificaciones',
  '/perfil': 'Mi Perfil',
  '/terminos': 'Términos y Condiciones',
  '/politicas': 'Políticas del Servicio',
}

const AppShellLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useThemeMode()

  const title =
    Object.entries(titles).find(([path]) => location.pathname.startsWith(path))?.[1] ||
    'Panel CRYSOL'

  const handleLogout = () => {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-theme flex h-screen overflow-hidden bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <Sidebar items={navItems} onLogout={handleLogout} />

      <div className="flex h-screen flex-1 flex-col overflow-hidden">
        <TopNav
          title={title}
          navigationItems={navItems}
          primaryItemsCount={3}
          onLogout={handleLogout}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 pb-20 sm:p-6 lg:pb-6 dark:bg-slate-950">
          <Outlet />
        </main>
      </div>

      <BottomNav items={navItems} onLogout={handleLogout} />
    </div>
  )
}

export default AppShellLayout
