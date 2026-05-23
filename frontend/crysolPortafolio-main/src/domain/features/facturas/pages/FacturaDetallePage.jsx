import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../../../shared/components/ui/Card'
import Loader from '../../../../shared/components/ui/Loader'
import Modal from '../../../../shared/components/ui/Modal'
import { formatCurrency, formatDate } from '../../../../shared/utils/formatters'
import FacturaCountdownAlert from '../components/FacturaCountdownAlert'
import FacturaStatusBadge from '../components/FacturaStatusBadge'
import { useFacturaDetail } from '../hooks/useFacturaDetail'

const FacturaDetallePage = () => {
  const { id } = useParams()
  const { factura, loading, updating, error, accept, reject } = useFacturaDetail(id)
  const [modalType, setModalType] = useState('')

  if (loading) return <Loader label="Cargando detalle de factura..." />
  if (error || !factura) return <p className="text-sm text-rose-700 dark:text-rose-300">{error || 'Factura no encontrada'}</p>

  const canAct = factura.estado === 'pendiente' && factura.diasRestantes >= 0

  const handleConfirm = async () => {
    if (modalType === 'aceptar') await accept()
    if (modalType === 'rechazar') await reject()
    setModalType('')
  }

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <FacturaCountdownAlert days={factura.diasRestantes} />

      <Card
        title={`Recepcion: ${formatDate(factura.fechaRecepcion)}`}
        subtitle={`Factura ${factura.folio}`}
        actions={<FacturaStatusBadge status={factura.estado} />}
      >
        <dl className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <div><dt className="text-slate-500 dark:text-slate-400">RUT emisor</dt><dd className="font-semibold dark:text-slate-100">{factura.rutEmisor}</dd></div>
          <div><dt className="text-slate-500 dark:text-slate-400">Razon social</dt><dd className="font-semibold dark:text-slate-100">{factura.razonSocial}</dd></div>
          <div><dt className="text-slate-500 dark:text-slate-400">Fecha emision</dt><dd className="font-semibold dark:text-slate-100">{formatDate(factura.fechaEmision)}</dd></div>
          <div><dt className="text-slate-500 dark:text-slate-400">Neto</dt><dd className="font-semibold dark:text-slate-100">{formatCurrency(factura.montoNeto)}</dd></div>
          <div><dt className="text-slate-500 dark:text-slate-400">IVA</dt><dd className="font-semibold dark:text-slate-100">{formatCurrency(factura.iva)}</dd></div>
          <div><dt className="text-slate-500 dark:text-slate-400">Total</dt><dd className="font-semibold dark:text-slate-100">{formatCurrency(factura.total)}</dd></div>
        </dl>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => setModalType('aceptar')}
            disabled={!canAct || updating}
            className="h-11 rounded-lg bg-emerald-600 px-4 text-base font-semibold text-white hover:bg-emerald-700 disabled:opacity-50 sm:h-10 sm:text-sm dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
          >
            Aceptar factura
          </button>
          <button
            type="button"
            onClick={() => setModalType('rechazar')}
            disabled={!canAct || updating}
            className="h-11 rounded-lg border border-rose-200 bg-rose-50 px-4 text-base font-semibold text-rose-700 hover:bg-rose-100 disabled:opacity-50 sm:h-10 sm:text-sm dark:border-rose-900 dark:bg-rose-950/50 dark:text-rose-200 dark:hover:bg-rose-950"
          >
            Rechazar factura
          </button>
        </div>
      </Card>

      <Modal
        open={Boolean(modalType)}
        title={modalType === 'aceptar' ? 'Confirmar aceptacion' : 'Confirmar rechazo'}
        onClose={() => setModalType('')}
        onConfirm={handleConfirm}
        confirmLabel={modalType === 'aceptar' ? 'Si, aceptar' : 'Si, rechazar'}
      >
        Esta accion requiere confirmacion y quedara registrada en el historial tributario.
      </Modal>
    </div>
  )
}

export default FacturaDetallePage
