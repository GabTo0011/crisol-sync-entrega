import { useCallback, useState } from 'react'

/**
 * Estados posibles del permiso de cámara.
 * @typedef {'idle'|'granted'|'denied'|'unavailable'|'requesting'} CameraPermissionStatus
 */

/**
 * Hook que gestiona el estado y solicitud de permisos de cámara.
 * No inicia ningún stream, solo verifica y solicita permisos.
 *
 * @returns {{
 *   status: CameraPermissionStatus,
 *   request: () => Promise<boolean>,
 *   isGranted: boolean,
 *   isDenied: boolean,
 *   isUnavailable: boolean,
 * }}
 */
export function useCameraPermission() {
  const [status, setStatus] = useState('idle')

  const isSupported = typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia

  const request = useCallback(async () => {
    if (!isSupported) {
      setStatus('unavailable')
      return false
    }

    setStatus('requesting')

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      stream.getTracks().forEach((track) => track.stop())
      setStatus('granted')
      return true
    } catch (error) {
      const isDenied = error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError'
      setStatus(isDenied ? 'denied' : 'unavailable')
      return false
    }
  }, [isSupported])

  return {
    status,
    request,
    isGranted: status === 'granted',
    isDenied: status === 'denied',
    isUnavailable: status === 'unavailable' || !isSupported,
  }
}
