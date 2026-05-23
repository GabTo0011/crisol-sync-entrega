import Card from '../../../../shared/components/ui/Card'
import StatWidget from '../../../../shared/components/ui/StatWidget'
import { formatCurrency } from '../../../../shared/utils/formatters'

const DashboardHomePage = () => {
  const iva = 1160000
  const deuda = 2250000
  const semaforo = deuda > 2000000 ? 'warning' : 'success'

  return (
    <div className="space-y-4">
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <StatWidget label="IVA proyectado F29" value={formatCurrency(iva)} hint="Estimado para periodo actual" color="emerald" />
        <StatWidget label="Deuda tributaria" value={formatCurrency(deuda)} hint="Saldo actualizado" color="amber" />
        <StatWidget label="Semaforo financiero" value={semaforo === 'warning' ? 'Amarillo' : 'Verde'} hint="Nivel de riesgo" color={semaforo === 'warning' ? 'amber' : 'emerald'} />
      </section>

      <Card title="Resumen operativo" subtitle="Atajos rapidos para los modulos principales">
        <div className="grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <p>• Registra boletas con OCR y valida montos antes de guardar.</p>
          <p>• Revisa facturas pendientes y responde dentro de 8 dias.</p>
          <p>• Exporta reportes PDF y CSV para auditoria o contador.</p>
          <p>• Gestiona tu certificado digital de forma segura.</p>
        </div>
      </Card>
    </div>
  )
}

export default DashboardHomePage
