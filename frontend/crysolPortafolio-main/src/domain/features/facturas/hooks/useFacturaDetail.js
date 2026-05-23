import { useCallback, useEffect, useState } from 'react'
import { acceptFactura, fetchFacturaById, rejectFactura } from '../services/facturas.service'

export function useFacturaDetail(id) {
  const [factura, setFactura] = useState(null)
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchFacturaById(id)
      setFactura(data)
      if (!data) setError('Factura no encontrada')
    } catch {
      setError('No fue posible cargar la factura')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    load()
  }, [load])

  const accept = useCallback(async () => {
    setUpdating(true)
    try {
      const next = await acceptFactura(id)
      setFactura(next)
      return next
    } finally {
      setUpdating(false)
    }
  }, [id])

  const reject = useCallback(async () => {
    setUpdating(true)
    try {
      const next = await rejectFactura(id)
      setFactura(next)
      return next
    } finally {
      setUpdating(false)
    }
  }, [id])

  return {
    factura,
    loading,
    updating,
    error,
    reload: load,
    accept,
    reject,
  }
}
