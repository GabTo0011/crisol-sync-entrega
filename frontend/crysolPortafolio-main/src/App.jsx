// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './presentation/pages/login/Login'
import Register from './presentation/pages/register/Register'
import AuthRoute from './presentation/components/auth/AuthRoute'
import PublicRoute from './presentation/components/auth/PublicRoute'
import AppShellLayout from './presentation/layouts/AppShellLayout'
import Dashboard from './presentation/pages/dashboard/dashboard'
import BoletasListPage from './domain/features/boletas/pages/BoletasListPage'
import BoletaNuevaPage from './domain/features/boletas/pages/BoletaNuevaPage'
import BoletaDetallePage from './domain/features/boletas/pages/BoletaDetallePage'
import FacturasListPage from './domain/features/facturas/pages/FacturasListPage'
import FacturaDetallePage from './domain/features/facturas/pages/FacturaDetallePage'
import ReportesPage from './domain/features/reportes/pages/ReportesPage'
import ConfiguracionPage from './domain/features/configuracion/pages/ConfiguracionPage'
import NotificacionesPage from './domain/features/notificaciones/pages/NotificacionesPage'
import AdminUsersDashboardPage from './domain/features/administrador/pages/AdminUsersDashboardPage'
import TermsPage from './presentation/pages/terms/TermsPage'
import PoliciesPage from './presentation/pages/policies/PoliciesPage'
import ProfilePage from './presentation/pages/profile/ProfilePage'

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/registrar"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route path="/terminos" element={<TermsPage />} />
      <Route path="/politicas" element={<PoliciesPage />} />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
      <Route
        path="/"
        element={
          <AuthRoute>
            <AppShellLayout />
          </AuthRoute>
        }
      >
        <Route index element={<Navigate to="/boletas" replace />} />
        <Route path="boletas" element={<BoletasListPage />} />
        <Route path="boletas/nueva" element={<BoletaNuevaPage />} />
        <Route path="boletas/:id" element={<BoletaDetallePage />} />
        <Route path="facturas" element={<FacturasListPage />} />
        <Route path="facturas/:id" element={<FacturaDetallePage />} />
        <Route path="reportes" element={<ReportesPage />} />
        <Route path="administrador" element={<Navigate to="/administrador/usuarios" replace />} />
        <Route path="administrador/usuarios" element={<AdminUsersDashboardPage />} />
        <Route path="configuracion" element={<ConfiguracionPage />} />
        <Route path="notificaciones" element={<NotificacionesPage />} />
        <Route path="perfil" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App