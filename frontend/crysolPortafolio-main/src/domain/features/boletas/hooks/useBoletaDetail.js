import { useCallback, useEffect, useState } from 'react'
import { cancelBoleta, fetchBoletaById, updateBoleta } from '../services/boletas.service'

export function useBoletaDetail(id) {
  const [boleta, setBoleta] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const data = await fetchBoletaById(id)
      setBoleta(data)
      if (!data) setError('Boleta no encontrada')
    } catch {
      setError('No fue posible cargar la boleta')
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    load()
  }, [load])

  const saveChanges = useCallback(
    async (patch) => {
      const next = await updateBoleta(id, patch)
      setBoleta(next)
      return next
    },
    [id],
  )

  const markAsCancelled = useCallback(async () => {
    const next = await cancelBoleta(id)
    setBoleta(next)
    return next
  }, [id])

  return {
    boleta,
    loading,
    error,
    reload: load,
    saveChanges,
    markAsCancelled,
  }
}
