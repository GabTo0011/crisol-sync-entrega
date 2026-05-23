import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout'
import FiltersBar from '../../components/dashboard/FiltersBar'
import MetricCard from '../../components/dashboard/MetricCard'
import DistributionCard from '../../components/dashboard/DistributionCard'
import EvolutionCard from '../../components/dashboard/EvolutionCard'
import DocumentsTable from '../../components/dashboard/DocumentsTable'
import { signOut } from '../../../infrastructure/services/auth.service'
import { useThemeMode } from '../../../shared/context/ThemeContext'

const dashboardNavItems = [
  {
    label: 'Inicio',
    to: '/dashboard',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.8V21h14V9.8" /><path d="M9.5 21v-6h5v6" /></svg>
    ),
  },
  {
    label: 'Facturas',
    to: '/facturas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M7 3h10a1 1 0 0 1 1 1v16l-2-1-2 1-2-1-2 1-2-1-2 1V4a1 1 0 0 1 1-1Z" /><path d="M9 8h6M9 12h6" /><path d="M9 16h3" /></svg>
    ),
  },
  {
    label: 'Reportes',
    to: '/reportes',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V5m0 14h16M7 14l3-3 3 2 5-6" /></svg>
    ),
  },
  {
    label: 'Admin',
    to: '/administrador/usuarios',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></svg>
    ),
  },
  {
    label: 'Documentos',
    to: '/boletas',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 3h7l3 3v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM14 3v4h4M9 12h6M9 16h6" /></svg>
    ),
  },
  {
    label: 'Config',
    to: '/configuracion',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m10.3 2.2-.6 2.1a8.3 8.3 0 0 0-1.9.8L5.8 4l-2 2 1.1 2a8.3 8.3 0 0 0-.8 1.9l-2.1.6v2.8l2.1.6c.2.7.5 1.3.8 1.9l-1.1 2 2 2 2-1.1c.6.3 1.2.6 1.9.8l.6 2.1h2.8l.6-2.1c.7-.2 1.3-.5 1.9-.8l2 1.1 2-2-1.1-2c.3-.6.6-1.2.8-1.9l2.1-.6V10.5l-2.1-.6a8.3 8.3 0 0 0-.8-1.9l1.1-2-2-2-2 1.1a8.3 8.3 0 0 0-1.9-.8l-.6-2.1h-2.8ZM12 15.6A3.6 3.6 0 1 0 12 8.4a3.6 3.6 0 0 0 0 7.2Z" /></svg>
    ),
  },
  {
    label: 'Alertas',
    to: '/notificaciones',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5m6 0a3 3 0 0 1-6 0" /></svg>
    ),
  },
  {
    label: 'Perfil',
    to: '/perfil',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
  },
  {
    label: 'Términos',
    onClick: () => window.open('/terminos', '_blank'),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M7 7h10M7 11h10M7 15h6" /></svg>
    ),
  },
  {
    label: 'Políticas',
    onClick: () => window.open('/politicas', '_blank'),
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M7 8h2M7 12h2M7 16h2M10 8h7M10 12h7M10 16h3" /></svg>
    ),
  },
]

const metricCards = [
  { title: 'DOCUMENTOS', badge: 'Periodo', value: '12', subtitle: 'Boletas y facturas', trend: '↗ +300.0%' },
  { title: 'FACTURADO', badge: 'CLP', value: '$4.441.000', subtitle: 'Monto total emitido', trend: '↗ +478.3%' },
  { title: 'PAGADO', badge: 'CLP', value: '$2.216.000', subtitle: 'Cobranza acumulada', trend: '→ +502.2%' },
  { title: 'PENDIENTE', badge: 'CLP', value: '$2.225.000', subtitle: 'Saldo por cobrar', trend: '↗ +456.3%' },
]

const distributionLegend = [
  { color: 'bg-emerald-500', label: 'Boletas pagadas', percent: '42%' },
  { color: 'bg-emerald-300', label: 'Boletas pendientes', percent: '8%' },
  { color: 'bg-emerald-600', label: 'Facturas pagadas', percent: '17%' },
  { color: 'bg-emerald-200', label: 'Facturas pendientes/vencidas', percent: '33%' },
]

const evolutionStats = [
  { value: '$370.083', label: 'Promedio' },
  { value: '$1.099.000', label: 'Maximo periodo' },
  { value: '49.9%', label: 'Tasa de cobro' },
]

const documentRows = [
  { folio: 'F-58217', type: 'Factura', client: 'Logistica Sur Ltda', date: '12-03-2026', status: 'Pagada', amount: '$740.000' },
  { folio: 'B-10366', type: 'Boleta', client: 'Retail Centro SA', date: '05-03-2026', status: 'Pagada', amount: '$98.000' },
  { folio: 'F-58102', type: 'Factura', client: 'Retail Centro SA', date: '24-02-2026', status: 'Vencida', amount: '$910.000' },
  { folio: 'B-10308', type: 'Boleta', client: 'Logistica Sur Ltda', date: '03-02-2026', status: 'Pagada', amount: '$189.000' },
  { folio: 'F-58014', type: 'Factura', client: 'Comercial Norte SpA', date: '18-01-2026', status: 'Pendiente', amount: '$630.000' },
  { folio: 'B-10231', type: 'Boleta', client: 'Comercial Norte SpA', date: '06-01-2026', status: 'Pagada', amount: '$145.000' },
  { folio: 'B-99077', type: 'Boleta', client: 'Comercial Norte SpA', date: '12-11-2025', status: 'Pagada', amount: '$132.000' },
  { folio: 'F-55291', type: 'Factura', client: 'Logistica Sur Ltda', date: '28-10-2025', status: 'Pendiente', amount: '$525.000' },
]

const Dashboard = () => {
  // La page queda como orquestadora: arma el layout y entrega datos a cada componente.
  const userName = 'Qwqwqwqwqw'
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useThemeMode()

  const handleLogout = () => {
    signOut()
    navigate('/login', { replace: true })
  }

  const topNavProps = {
    title: 'Dashboard financiero',
    navigationItems: dashboardNavItems,
    primaryItemsCount: 3,
    onLogout: handleLogout,
    isDark,
    toggleTheme,
  }

  const bottomNavProps = {
    items: dashboardNavItems,
    onLogout: handleLogout,
  }

  return (
    <DashboardLayout
      sidebarProps={{ items: dashboardNavItems, onLogout: handleLogout }}
      topNavProps={topNavProps}
      bottomNavProps={bottomNavProps}
    >
      <div className="mx-auto w-full max-w-350 space-y-4 sm:space-y-5">
        {/* FiltersBar: concentra los filtros de lectura; hoy es visual, pero luego puede conectarse a estado o query params. */}
        <FiltersBar appliedSummary="Aplicado: Todos • Todos los clientes • Mensual • Todos" />

        {/* Metric cards: cada card recibe contenido por props, así el bloque se reutiliza en otras pantallas. */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((card) => (
            <MetricCard key={card.title} {...card} />
          ))}
        </section>

        {/* Gráficos: se separan en componentes dedicados para que el dashboard no mezcle layout con la representación visual. */}
        <section className="grid grid-cols-1 gap-3 xl:grid-cols-2">
          <DistributionCard
            title="Distribucion por tipo y estado"
            description="Participacion de boletas y facturas segun su estado en el periodo seleccionado"
            totalLabel="Total documentos registrados"
            totalValue="12"
            legendItems={distributionLegend}
          />

          <EvolutionCard
            title="Evolucion de facturacion"
            description="Monto emitido durante el periodo segun la vista seleccionada"
            stats={evolutionStats}
            targetLabel="Meta mensual: $900.000"
            periodLabel="Mensual"
          />
        </section>

        {/* Tabla: el listado vive aislado para que la fila y el estado se puedan reutilizar en otros módulos. */}
        <DocumentsTable
          title="Registro de boletas y facturas"
          description="Listado de documentos del cliente segun filtros aplicados"
          countLabel="Mostrando 12 registros"
          rows={documentRows}
        />
      </div>
    </DashboardLayout>
  )
}

export default Dashboard