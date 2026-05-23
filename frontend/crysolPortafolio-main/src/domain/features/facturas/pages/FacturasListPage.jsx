import { Link } from 'react-router-dom'
import Card from '../../../../shared/components/ui/Card'
import Loader from '../../../../shared/components/ui/Loader'
import Select from '../../../../shared/components/ui/Select'
import Table from '../../../../shared/components/ui/Table'
import { formatCurrency, formatDate } from '../../../../shared/utils/formatters'
import FacturaStatusBadge from '../components/FacturaStatusBadge'
import { useFacturasList } from '../hooks/useFacturasList'
import { useFacturasSync } from '../hooks/useFacturasSync'

const FacturasListPage = () => {
  const { items, loading, error, status, setStatus, reload } = useFacturasList()
  const { syncing, lastSync, syncNow } = useFacturasSync()

  const syncAndReload = async () => {
    await syncNow()
    await reload()
  }

  const columns = [
    { key: 'folio', header: 'Folio' },
    { key: 'razonSocial', header: 'Emisor' },
    { key: 'fechaRecepcion', header: 'Recepcion', render: (row) => formatDate(row.fechaRecepcion) },
    { key: 'total', header: 'Total', render: (row) => formatCurrency(row.total) },
    { key: 'estado', header: 'Estado', render: (row) => <FacturaStatusBadge status={row.estado} /> },
    {
      key: 'actions',
      header: 'Acciones',
      render: (row) => (
        <Link className="text-xs font-semibold text-emerald-700 hover:underline" to={`/facturas/${row.id}`}>
          Ver detalle
        </Link>
      ),
    },
  ]

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <Card
        title="Gestion de aceptacion y rechazo dentro de plazo legal"
        subtitle="Facturas DTE"
        actions={
          <button
            type="button"
            onClick={syncAndReload}
            disabled={syncing}
            className="h-11 rounded-lg bg-slate-900 px-4 text-base font-semibold text-white hover:bg-slate-800 disabled:opacity-60 sm:h-10 sm:text-sm dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            {syncing ? 'Sincronizando...' : 'Sincronizar con SII'}
          </button>
        }
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Select
            label="Estado"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            options={[
              { label: 'Todos', value: 'todos' },
              { label: 'Pendiente', value: 'pendiente' },
              { label: 'Aceptada', value: 'aceptada' },
              { label: 'Rechazada', value: 'rechazada' },
            ]}
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-slate-700 sm:text-xs dark:text-slate-300">Ultima sincronizacion</span>
            <div className="flex h-10 items-center rounded-md border border-slate-400 bg-white px-3 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100">
              {lastSync ? formatDate(lastSync) : 'Sin registros'}
            </div>
          </div>
        </div>
      </Card>

      <Card>
        {loading ? <Loader label="Cargando facturas..." /> : null}
        {error ? <p className="text-sm text-rose-700">{error}</p> : null}
        {!loading && !error ? (
          <>
            <div className="space-y-2 sm:hidden">
              {items.map((row) => (
                <article key={row.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{row.folio}</p>
                    <FacturaStatusBadge status={row.estado} />
                  </div>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                    <dt className="text-slate-500 dark:text-slate-400">Emisor</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{row.razonSocial}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Recepcion</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{formatDate(row.fechaRecepcion)}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Total</dt>
                    <dd className="text-right font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(row.total)}</dd>
                  </dl>
                  <div className="mt-3">
                    <Link className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300" to={`/facturas/${row.id}`}>
                      Ver detalle
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="hidden sm:block">
              <Table columns={columns} data={items} />
            </div>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default FacturasListPage
