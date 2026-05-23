import { useCallback, useEffect, useState } from 'react'
import { fetchCurrentCertificate, uploadCertificate } from '../services/configuracion.service'

export function useCertificadoDigital() {
  const [current, setCurrent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const cert = await fetchCurrentCertificate()
      setCurrent(cert)
    } catch {
      setError('No fue posible cargar la configuracion del certificado')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const upload = async (file) => {
    setUploading(true)
    setError('')

    try {
      const cert = await uploadCertificate(file)
      setCurrent(cert)
      return cert
    } catch {
      setError('No fue posible subir el certificado')
      return null
    } finally {
      setUploading(false)
    }
  }

  return {
    current,
    loading,
    uploading,
    error,
    upload,
    reload: load,
  }
}
