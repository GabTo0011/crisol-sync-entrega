import { useMemo, useState } from 'react'
import Card from '../../../../shared/components/ui/Card'
import Input from '../../../../shared/components/ui/Input'
import Loader from '../../../../shared/components/ui/Loader'
import Select from '../../../../shared/components/ui/Select'
import Table from '../../../../shared/components/ui/Table'
import { formatDate } from '../../../../shared/utils/formatters'
import AdminUserStatusBadge from '../components/AdminUserStatusBadge'
import { useAdminUsers } from '../hooks/useAdminUsers'

const roleOptions = [
  { label: 'Todos los roles', value: 'todos' },
  { label: 'Administrador', value: 'admin' },
  { label: 'Operador', value: 'operador' },
  { label: 'Visor', value: 'visor' },
]

const statusOptions = [
  { label: 'Todos los estados', value: 'todos' },
  { label: 'Activo', value: 'activo' },
  { label: 'Invitado', value: 'invitado' },
  { label: 'Bloqueado', value: 'bloqueado' },
]

const metricCards = (summary) => [
  { label: 'Usuarios totales', value: summary.total },
  { label: 'Usuarios activos', value: summary.active },
  { label: 'Invitaciones pendientes', value: summary.invited },
  { label: 'Administradores', value: summary.admins },
]

const AdminUsersDashboardPage = () => {
  const {
    users,
    loading,
    saving,
    error,
    processingId,
    query,
    role,
    status,
    summary,
    setQuery,
    setRole,
    setStatus,
    inviteUser,
    toggleUserStatus,
    reload,
  } = useAdminUsers()

  const [form, setForm] = useState({ name: '', email: '', role: 'operador' })
  const [formError, setFormError] = useState('')

  const columns = useMemo(
    () => [
      { key: 'name', header: 'Usuario' },
      { key: 'email', header: 'Correo' },
      { key: 'role', header: 'Rol', render: (row) => <span className="capitalize">{row.role}</span> },
      { key: 'status', header: 'Estado', render: (row) => <AdminUserStatusBadge status={row.status} /> },
      { key: 'lastLoginAt', header: 'Ultimo acceso', render: (row) => formatDate(row.lastLoginAt) },
      {
        key: 'actions',
        header: 'Acciones',
        render: (row) => (
          <button
            type="button"
            onClick={() => toggleUserStatus(row.id)}
            disabled={processingId === row.id || row.status === 'invitado'}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {row.status === 'bloqueado' ? 'Activar' : 'Bloquear'}
          </button>
        ),
      },
    ],
    [processingId, toggleUserStatus],
  )

  const handleInviteSubmit = async (event) => {
    event.preventDefault()
    setFormError('')

    if (!form.name.trim() || !form.email.trim()) {
      setFormError('Completa nombre y correo para invitar')
      return
    }

    if (!form.email.includes('@')) {
      setFormError('Ingresa un correo valido')
      return
    }

    const result = await inviteUser(form)
    if (!result.ok) {
      setFormError(result.error)
      return
    }

    setForm(result.form)
  }

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {metricCards(summary).map((metric) => (
          <Card key={metric.label} className="p-3 sm:p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{metric.value}</p>
          </Card>
        ))}
      </section>

      <Card title="Gestion de usuarios" subtitle="Administra accesos, roles y bloqueos de cuentas">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Input
            label="Buscar usuario"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre o correo"
          />
          <Select
            label="Rol"
            value={role}
            onChange={(event) => setRole(event.target.value)}
            options={roleOptions}
          />
          <Select
            label="Estado"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            options={statusOptions}
          />
        </div>
      </Card>

      <Card title="Invitar usuario" subtitle="El usuario recibira acceso inicial como invitado">
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-4" onSubmit={handleInviteSubmit}>
          <Input
            label="Nombre"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Nombre completo"
          />
          <Input
            label="Correo"
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="usuario@empresa.cl"
          />
          <Select
            label="Rol inicial"
            value={form.role}
            onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
            options={roleOptions.filter((item) => item.value !== 'todos')}
          />
          <div className="flex items-end">
            <button
              type="submit"
              disabled={saving}
              className="h-10 w-full rounded-md bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              {saving ? 'Enviando...' : 'Enviar invitacion'}
            </button>
          </div>
        </form>
        {formError ? <p className="mt-3 text-sm text-rose-700 dark:text-rose-300">{formError}</p> : null}
      </Card>

      <Card
        title="Directorio de usuarios"
        subtitle={`Resultados: ${users.length}`}
        actions={
          <button
            type="button"
            onClick={reload}
            className="h-10 rounded-md border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Actualizar
          </button>
        }
      >
        {loading ? <Loader label="Cargando usuarios..." /> : null}
        {error ? <p className="text-sm text-rose-700 dark:text-rose-300">{error}</p> : null}
        {!loading && !error ? (
          <>
            <div className="space-y-2 sm:hidden">
              {users.map((item) => (
                <article key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.email}</p>
                    </div>
                    <AdminUserStatusBadge status={item.status} />
                  </div>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                    <dt className="text-slate-500 dark:text-slate-400">Rol</dt>
                    <dd className="text-right capitalize text-slate-700 dark:text-slate-300">{item.role}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Ultimo acceso</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{formatDate(item.lastLoginAt)}</dd>
                  </dl>
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => toggleUserStatus(item.id)}
                      disabled={processingId === item.id || item.status === 'invitado'}
                      className="h-9 w-full rounded-md border border-slate-300 px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {item.status === 'bloqueado' ? 'Activar cuenta' : 'Bloquear cuenta'}
                    </button>
                  </div>
                </article>
              ))}
              {users.length === 0 ? <p className="text-sm text-slate-500 dark:text-slate-400">No hay usuarios para mostrar</p> : null}
            </div>

            <div className="hidden sm:block">
              <Table columns={columns} data={users} />
            </div>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default AdminUsersDashboardPage
