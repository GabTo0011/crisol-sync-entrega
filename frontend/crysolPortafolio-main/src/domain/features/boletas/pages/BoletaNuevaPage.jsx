import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../../../shared/components/ui/Card'
import DatePicker from '../../../../shared/components/ui/DatePicker'
import FileUpload from '../../../../shared/components/ui/FileUpload'
import Input from '../../../../shared/components/ui/Input'
import Loader from '../../../../shared/components/ui/Loader'
import NumberInput from '../../../../shared/components/ui/NumberInput'
import Select from '../../../../shared/components/ui/Select'
import CameraButton from '../../../../shared/components/ui/CameraButton'
import { boletaCategorias } from '../mocks/boletas.mock'
import { useBoletaOcr } from '../hooks/useBoletaOcr'

const MAX_FILE_SIZE = 4 * 1024 * 1024

const BoletaNuevaPage = () => {
  const navigate = useNavigate()
  const { ocrData, loadingOcr, saving, error, setOcrData, runOcr, saveBoleta } = useBoletaOcr()
  const [file, setFile] = useState(null)
  const [fileError, setFileError] = useState('')

  const categories = useMemo(
    () => boletaCategorias.map((item) => ({ label: item, value: item })),
    [],
  )

  const handleFile = (nextFile) => {
    setFileError('')
    if (!nextFile) {
      setFile(null)
      return
    }

    const validType = ['image/jpeg', 'image/png'].includes(nextFile.type)
    if (!validType) {
      setFileError('Solo se permiten imagenes JPG o PNG')
      return
    }

    if (nextFile.size > MAX_FILE_SIZE) {
      setFileError('El archivo supera el maximo de 4MB')
      return
    }

    setFile(nextFile)
  }

  const triggerOcr = async () => {
    if (!file) {
      setFileError('Debes seleccionar una imagen para OCR')
      return
    }
    await runOcr(file)
  }

  const handleCameraCapture = async (capturedFile) => {
    setFile(capturedFile)
    setFileError('')
    await runOcr(capturedFile)
  }

  const onFieldChange = (field, value) => {
    setOcrData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    if (!ocrData) return
    if (!ocrData.fecha || !ocrData.comercio || Number(ocrData.monto) < 0) return

    const created = await saveBoleta({
      ...ocrData,
      monto: Number(ocrData.monto),
      imagenUrl: file ? URL.createObjectURL(file) : '',
      observacion: 'Creada manualmente desde OCR',
    })

    if (created?.id) {
      navigate(`/boletas/${created.id}`)
    }
  }

  return (
    <div className="mx-auto w-full max-w-350 space-y-4">
      <Card title="Sube imagen y ajusta datos antes de guardar" subtitle="Registrar boleta con OCR">
        <div className="grid gap-3">
          <FileUpload
            label="Imagen de boleta"
            accept="image/jpeg,image/png"
            helper="Formatos permitidos: JPG y PNG. Peso maximo: 4MB"
            onChange={handleFile}
            error={fileError}
          />
          <CameraButton onCapture={handleCameraCapture} disabled={loadingOcr} />
          <button
            type="button"
            onClick={triggerOcr}
            disabled={loadingOcr}
            className="h-11 rounded-lg bg-slate-900 px-4 text-base font-semibold text-white hover:bg-slate-800 disabled:opacity-60 sm:h-10 sm:text-sm dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            {loadingOcr ? 'Procesando OCR...' : 'Extraer datos OCR'}
          </button>
          {loadingOcr ? <Loader label="OCR en proceso (esperado menor a 5s)..." /> : null}
          {error ? <p className="text-sm text-rose-700 dark:text-rose-300">{error}</p> : null}
        </div>
      </Card>

      {ocrData ? (
        <Card title="Puedes corregir antes de guardar" subtitle="Datos extraidos">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input label="Comercio" value={ocrData.comercio || ''} onChange={(event) => onFieldChange('comercio', event.target.value)} />
            <DatePicker label="Fecha" value={ocrData.fecha || ''} onChange={(event) => onFieldChange('fecha', event.target.value)} />
            <NumberInput label="Monto" min={0} value={ocrData.monto || 0} onChange={(event) => onFieldChange('monto', event.target.value)} />
            <Select
              label="Categoria"
              value={ocrData.categoria || categories[0]?.value}
              onChange={(event) => onFieldChange('categoria', event.target.value)}
              options={categories}
            />
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={handleSave}
              disabled={saving}
              className="h-11 rounded-lg bg-emerald-600 px-4 text-base font-semibold text-white hover:bg-emerald-700 disabled:opacity-60 sm:h-10 sm:text-sm dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400"
            >
              {saving ? 'Guardando...' : 'Guardar boleta'}
            </button>
          </div>
        </Card>
      ) : null}
    </div>
  )
}

export default BoletaNuevaPage
