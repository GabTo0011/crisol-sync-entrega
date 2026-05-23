import { useState } from 'react'
import Alert from '../../../../shared/components/ui/Alert'
import Card from '../../../../shared/components/ui/Card'
import DatePicker from '../../../../shared/components/ui/DatePicker'
import Loader from '../../../../shared/components/ui/Loader'
import Select from '../../../../shared/components/ui/Select'
import Table from '../../../../shared/components/ui/Table'
import { useReportes } from '../hooks/useReportes'

const ReportesPage = () => {
  const { types, history, loading, generating, error, generate } = useReportes()
  const [tipo, setTipo] = useState('')
  const [formato, setFormato] = useState('PDF')
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')

  const onGenerate = async () => {
    if (!tipo || !desde || !hasta) return
    await generate({ tipo, formato, desde, hasta })
  }

  const columns = [
    { key: 'tipo', header: 'Tipo' },
    { key: 'formato', header: 'Formato' },
    { key: 'fecha', header: 'Fecha' },
    { key: 'generadoPor', header: 'Generado por' },
  ]

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <Card title="Generador de reportes" subtitle="Exporta a PDF o CSV para contador y auditoria">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Select
            label="Tipo de reporte"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
            options={[{ label: 'Selecciona tipo', value: '' }, ...types.map((item) => ({ label: item.label, value: item.id }))]}
          />
          <Select
            label="Formato"
            value={formato}
            onChange={(event) => setFormato(event.target.value)}
            options={[{ label: 'PDF', value: 'PDF' }, { label: 'CSV', value: 'CSV' }]}
          />
          <DatePicker label="Desde" value={desde} onChange={(event) => setDesde(event.target.value)} />
          <DatePicker label="Hasta" value={hasta} onChange={(event) => setHasta(event.target.value)} />
        </div>

        <button
          type="button"
          onClick={onGenerate}
          disabled={generating}
          className="mt-3 h-11 rounded-lg bg-emerald-600 px-4 text-base font-semibold text-white hover:bg-emerald-700 disabled:opacity-60 sm:h-10 sm:text-sm dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
        >
          {generating ? 'Generando...' : 'Generar reporte'}
        </button>

        {error ? <div className="mt-3"><Alert tone="danger" title="Error">{error}</Alert></div> : null}
      </Card>

      <Card title="Historial de reportes">
        {loading ? <Loader label="Cargando historial..." /> : null}
        {!loading ? (
          <>
            <div className="space-y-2 sm:hidden">
              {history.map((item) => (
                <article key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.tipo}</p>
                  <dl className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
                    <dt className="text-slate-500 dark:text-slate-400">Formato</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{item.formato}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Fecha</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{item.fecha}</dd>
                    <dt className="text-slate-500 dark:text-slate-400">Generado por</dt>
                    <dd className="text-right text-slate-700 dark:text-slate-300">{item.generadoPor}</dd>
                  </dl>
                </article>
              ))}
            </div>
            <div className="hidden sm:block">
              <Table columns={columns} data={history} rowKey="id" />
            </div>
          </>
        ) : null}
      </Card>
    </div>
  )
}

export default ReportesPage
