import { useState } from 'react'
import { useCameraPermission } from '../../../domain/hooks/camera/useCameraPermission'
import CameraCapture from './CameraCapture'

/**
 * Botón visible SOLO en dispositivos móviles que gestiona el flujo completo:
 * solicitud de permiso → vista de cámara → entrega del File capturado.
 *
 * En desktop/tablet se oculta con `md:hidden`.
 *
 * @param {Object} props
 * @param {(file: File) => void} props.onCapture - Callback con el File de la foto capturada
 * @param {boolean} [props.disabled] - Deshabilitar el botón
 */
const CameraButton = ({ onCapture, disabled = false }) => {
  const { status, request, isDenied, isUnavailable } = useCameraPermission()
  const [cameraOpen, setCameraOpen] = useState(false)

  const handlePress = async () => {
    if (status === 'granted') {
      setCameraOpen(true)
      return
    }

    const granted = await request()
    if (granted) {
      setCameraOpen(true)
    }
  }

  const handleCapture = (file) => {
    setCameraOpen(false)
    onCapture(file)
  }

  const handleClose = () => {
    setCameraOpen(false)
  }

  if (isUnavailable) return null

  return (
    <>
      <div className="md:hidden">
        <button
          type="button"
          onClick={handlePress}
          disabled={disabled || status === 'requesting'}
          aria-label="Escanear boleta con cámara"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-emerald-600 text-emerald-700 font-semibold transition hover:bg-emerald-50 disabled:opacity-50 dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-950/30"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          {status === 'requesting' ? 'Solicitando permiso...' : 'Escanear con cámara'}
        </button>

        {isDenied && (
          <p className="mt-2 text-xs text-rose-600 dark:text-rose-400">
            Permiso de cámara denegado. Actívalo en la configuración del navegador.
          </p>
        )}
      </div>

      {cameraOpen && (
        <CameraCapture onCapture={handleCapture} onClose={handleClose} />
      )}
    </>
  )
}

export default CameraButton
