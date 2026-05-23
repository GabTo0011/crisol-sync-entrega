import Badge from '../../../../shared/components/ui/Badge'
import Card from '../../../../shared/components/ui/Card'
import Loader from '../../../../shared/components/ui/Loader'
import { formatDate } from '../../../../shared/utils/formatters'
import { useNotificaciones } from '../hooks/useNotificaciones'

const NotificacionesPage = () => {
  const { items, loading, error, markAsRead } = useNotificaciones()

  return (
    <div className="mx-auto w-full max-w-350">
      <Card title="Alertas de vencimiento y novedades del sistema" subtitle="Notificaciones">
        {loading ? <Loader label="Cargando notificaciones..." /> : null}
        {error ? <p className="text-sm text-rose-700 dark:text-rose-300">{error}</p> : null}

        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-wrap items-center gap-2">
                <Badge value={item.prioridad} />
                {!item.leida ? <Badge value="pendiente" /> : null}
                <span className="text-sm text-slate-500 sm:text-xs dark:text-slate-400">{formatDate(item.fecha)}</span>
              </div>
              <p className="mt-2 text-base font-semibold text-slate-900 sm:text-lg dark:text-slate-100">{item.titulo}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.mensaje}</p>
              {!item.leida ? (
                <button
                  type="button"
                  onClick={() => markAsRead(item.id)}
                  className="mt-2 text-base font-semibold text-emerald-700 hover:underline sm:text-sm dark:text-emerald-300"
                >
                  Marcar como leida
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default NotificacionesPage
