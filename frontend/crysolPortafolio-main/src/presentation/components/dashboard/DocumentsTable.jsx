import Card from '../../../shared/components/ui/Card'
import Table from '../../../shared/components/ui/Table'
import Badge from '../../../shared/components/ui/Badge'

const DocumentsTable = ({ title, description, countLabel, rows }) => {
  const columns = [
    { key: 'folio', header: 'Folio' },
    { key: 'type', header: 'Tipo' },
    { key: 'client', header: 'Cliente' },
    { key: 'date', header: 'Fecha' },
    { key: 'status', header: 'Estado', render: (row) => <Badge value={row.status} /> },
    { key: 'amount', header: 'Monto' },
  ]

  return (
    <Card
      title={title}
      subtitle={description}
      actions={<div className="text-sm text-slate-500 sm:text-xs dark:text-slate-400">{countLabel}</div>}
    >

      <div className="space-y-2 sm:hidden">
        {rows.map((row) => (
          <article key={row.folio} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{row.folio}</p>
              <Badge value={row.status} />
            </div>
            <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
              <dt className="text-slate-500 dark:text-slate-400">Tipo</dt>
              <dd className="text-right text-slate-700 dark:text-slate-300">{row.type}</dd>
              <dt className="text-slate-500 dark:text-slate-400">Cliente</dt>
              <dd className="text-right text-slate-700 dark:text-slate-300">{row.client}</dd>
              <dt className="text-slate-500 dark:text-slate-400">Fecha</dt>
              <dd className="text-right text-slate-700 dark:text-slate-300">{row.date}</dd>
              <dt className="text-slate-500 dark:text-slate-400">Monto</dt>
              <dd className="text-right font-semibold text-slate-900 dark:text-slate-100">{row.amount}</dd>
            </dl>
          </article>
        ))}
      </div>

      <div className="hidden sm:block">
        <Table columns={columns} data={rows} rowKey="folio" />
      </div>
    </Card>
  )
}

export default DocumentsTable