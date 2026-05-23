import { Link, useNavigate, useParams } from 'react-router-dom'
import Card from '../../../../shared/components/ui/Card'
import DatePicker from '../../../../shared/components/ui/DatePicker'
import Input from '../../../../shared/components/ui/Input'
import Loader from '../../../../shared/components/ui/Loader'
import NumberInput from '../../../../shared/components/ui/NumberInput'
import { formatCurrency } from '../../../../shared/utils/formatters'
import BoletaStatusBadge from '../components/BoletaStatusBadge'
import { useBoletaDetail } from '../hooks/useBoletaDetail'

const BoletaDetallePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { boleta, loading, error, saveChanges, markAsCancelled } = useBoletaDetail(id)

  if (loading) return <Loader label="Cargando boleta..." />
  if (error || !boleta) return <p className="text-sm text-rose-700 dark:text-rose-300">{error || 'Boleta no encontrada'}</p>

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <Card
        title={`Monto: ${formatCurrency(boleta.monto)}`}
        subtitle={`Detalle ${boleta.id}`}
        actions={<BoletaStatusBadge status={boleta.estado} />}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Input label="Comercio" value={boleta.comercio} onChange={(event) => saveChanges({ comercio: event.target.value })} />
          <DatePicker label="Fecha" value={boleta.fecha} onChange={(event) => saveChanges({ fecha: event.target.value })} />
          <NumberInput label="Monto" min={0} value={boleta.monto} onChange={(event) => saveChanges({ monto: Number(event.target.value) })} />
          <Input label="Categoria" value={boleta.categoria} onChange={(event) => saveChanges({ categoria: event.target.value })} />
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={markAsCancelled}
            className="h-11 rounded-lg border border-rose-200 bg-rose-50 px-4 text-base font-semibold text-rose-700 hover:bg-rose-100 sm:h-10 sm:text-sm dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-200 dark:hover:bg-rose-950"
          >
            Anular boleta
          </button>
          <button
            type="button"
            onClick={() => navigate('/boletas')}
            className="h-11 rounded-lg border border-slate-300 px-4 text-base font-semibold text-slate-700 hover:bg-slate-100 sm:h-10 sm:text-sm dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Volver al listado
          </button>
          <Link
            to="/boletas"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-4 text-base font-semibold text-white hover:bg-slate-800 sm:h-10 sm:text-sm dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Guardar y cerrar
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default BoletaDetallePage
