import { Link } from 'react-router-dom'
import Card from '../../../../shared/components/ui/Card'
import Input from '../../../../shared/components/ui/Input'
import Loader from '../../../../shared/components/ui/Loader'
import Table from '../../../../shared/components/ui/Table'
import { formatCurrency, formatDate } from '../../../../shared/utils/formatters'
import { useBoletasList } from '../hooks/useBoletasList'
import BoletaStatusBadge from '../components/BoletaStatusBadge'

const BoletasListPage = () => {
  const { items, loading, error, query, setQuery, remove } = useBoletasList()

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'fecha', header: 'Fecha', render: (row) => formatDate(row.fecha) },
    { key: 'comercio', header: 'Comercio' },
    { key: 'monto', header: 'Monto', render: (row) => formatCurrency(row.monto) },
    { key: 'estado', header: 'Estado', render: (row) => <BoletaStatusBadge status={row.estado} /> },
    {
      key: 'actions',
      header: 'Acciones',
      render: (row) => (
        <div className="flex gap-2">
          <Link className="text-xs font-semibold text-emerald-700 hover:underline" to={`/boletas/${row.id}`}>
            Ver
          </Link>
          <button
            type="button"
            className="text-xs font-semibold text-rose-700 hover:underline"
            onClick={() => remove(row.id)}
          >
            Eliminar
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <Card
        title="Listado editable y digitalizado"
        subtitle="Boletas de caja chica"
        actions={
          <Link to="/boletas/nueva" className="inline-flex h-11 items-center rounded-lg bg-emerald-600 px-4 text-base font-semibold text-white hover:bg-emerald-700 sm:h-10 sm:text-sm dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400">
            Nueva boleta
          </Link>
        }
      >
        <Input
          label="Buscar"
          placeholder="Comercio, categoria, estado o ID"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Card>

      <Card>
        {loading ? <Loader label="Cargando boletas..." /> : null}
        {error ? <p className="text-sm text-rose-700">{error}</p> : null}
        {!loading && !error ? (
          <>
            <div className="space-y-2 sm:hidden">
              {items.map((row) => (
                <article key={row.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{row.id}</p>
                    <BoletaStatusBadge status={row.estado} />
                  </div>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                    <dt className="text-slate-500 dark:text-slate-400">Comercio</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{row.comercio}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Fecha</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{formatDate(row.fecha)}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Monto</dt>
                    <dd className="text-right font-semibold text-slate-900 dark:text-slate-100">{formatCurrency(row.monto)}</dd>
                  </dl>
                  <div className="mt-3 flex items-center gap-3">
                    <Link className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-300" to={`/boletas/${row.id}`}>
                      Ver
                    </Link>
                    <button
                      type="button"
                      className="text-sm font-semibold text-rose-700 hover:underline"
                      onClick={() => remove(row.id)}
                    >
                      Eliminar
                    </button>
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

export default BoletasListPage
