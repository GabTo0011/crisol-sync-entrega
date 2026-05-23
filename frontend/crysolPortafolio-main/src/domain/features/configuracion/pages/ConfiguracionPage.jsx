import Alert from '../../../../shared/components/ui/Alert'
import Card from '../../../../shared/components/ui/Card'
import FileUpload from '../../../../shared/components/ui/FileUpload'
import Loader from '../../../../shared/components/ui/Loader'
import { formatDate } from '../../../../shared/utils/formatters'
import { securityTipsMock } from '../mocks/configuracion.mock'
import { useCertificadoDigital } from '../hooks/useCertificadoDigital'

const ConfiguracionPage = () => {
  const { current, loading, uploading, error, upload } = useCertificadoDigital()

  const handleFile = async (file) => {
    if (!file) return

    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!['pfx', 'p12'].includes(ext || '')) return

    await upload(file)
  }

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <Card title="Certificado digital" subtitle="Carga segura para integracion tributaria">
        <FileUpload
          label="Subir certificado"
          accept=".pfx,.p12"
          helper="Solo formatos .pfx y .p12"
          onChange={handleFile}
        />

        {uploading ? <div className="mt-3"><Loader label="Subiendo certificado..." /></div> : null}
        {error ? <p className="mt-2 text-sm text-rose-700 dark:text-rose-300">{error}</p> : null}

        {current ? (
          <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-200">
            <p className="font-semibold">Certificado activo: {current.fileName}</p>
            <p>Fecha de carga: {formatDate(current.uploadedAt)}</p>
          </div>
        ) : null}
      </Card>

      <Card title="Recomendaciones de seguridad">
        <Alert tone="warning" title="Buenas practicas">
          <ul className="list-disc pl-5">
            {securityTipsMock.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </Alert>
      </Card>

      {loading ? <Loader /> : null}
    </div>
  )
}

export default ConfiguracionPage
