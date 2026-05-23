import { useEffect } from 'react'
import { useCameraCapture } from '../../../domain/hooks/camera/useCameraCapture'

/**
 * Vista de cámara con preview en vivo y botón de captura.
 * Se monta dentro de un modal o contenedor del caller.
 * Responsabilidad: renderizar el stream y emitir el frame capturado.
 *
 * @param {Object} props
 * @param {(file: File) => void} props.onCapture - Callback con el File capturado
 * @param {() => void} props.onClose - Callback para cerrar la vista
 */
const CameraCapture = ({ onCapture, onClose }) => {
  const { videoRef, isStreaming, startStream, stopStream, captureFrame } = useCameraCapture()

  useEffect(() => {
    startStream()
    return () => stopStream()
  }, [startStream, stopStream])

  const handleCapture = async () => {
    const file = await captureFrame()
    if (file) {
      stopStream()
      onCapture(file)
    }
  }

  const handleClose = () => {
    stopStream()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black">
      <div className="relative flex-1 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          playsInline
          muted
          aria-label="Vista previa de cámara"
        />

        {!isStreaming && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-sm text-white/70">Iniciando cámara...</p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-3/4 w-11/12 rounded-xl border-2 border-dashed border-white/50" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 bg-black/80 px-6 py-6">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar cámara"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <button
          type="button"
          onClick={handleCapture}
          disabled={!isStreaming}
          aria-label="Capturar foto"
          className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white/20 transition active:scale-95 disabled:opacity-40"
        >
          <div className="h-12 w-12 rounded-full bg-white" />
        </button>

        <div className="h-12 w-12" aria-hidden="true" />
      </div>
    </div>
  )
}

export default CameraCapture
