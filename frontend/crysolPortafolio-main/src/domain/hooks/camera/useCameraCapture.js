import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Hook que gestiona el stream de video de la cámara trasera y la captura de frames.
 * Responsabilidad única: iniciar/detener stream y capturar imagen como File.
 *
 * @returns {{
 *   videoRef: React.RefObject,
 *   isStreaming: boolean,
 *   startStream: () => Promise<boolean>,
 *   stopStream: () => void,
 *   captureFrame: () => File|null,
 * }}
 */
export function useCameraCapture() {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [isStreaming, setIsStreaming] = useState(false)

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    setIsStreaming(false)
  }, [])

  const startStream = useCallback(async () => {
    stopStream()

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
        setIsStreaming(true)
        return true
      }

      stopStream()
      return false
    } catch {
      setIsStreaming(false)
      return false
    }
  }, [stopStream])

  const captureFrame = useCallback(() => {
    const video = videoRef.current
    if (!video || !isStreaming) return null

    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) { resolve(null); return }
          resolve(new File([blob], `boleta-camara-${Date.now()}.jpg`, { type: 'image/jpeg' }))
        },
        'image/jpeg',
        0.92,
      )
    })
  }, [isStreaming])

  useEffect(() => {
    return () => stopStream()
  }, [stopStream])

  return {
    videoRef,
    isStreaming,
    startStream,
    stopStream,
    captureFrame,
  }
}
