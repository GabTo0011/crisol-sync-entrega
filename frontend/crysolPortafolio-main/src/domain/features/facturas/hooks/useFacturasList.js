import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchFacturas } from '../services/facturas.service'

export function useFacturasList() {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchFacturas()
      setItems(data)
    } catch {
      setError('No fue posible cargar facturas')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const filtered = useMemo(() => {
    if (status === 'todos') return items
    return items.filter((item) => item.estado === status)
  }, [items, status])

  return {
    items: filtered,
    loading,
    error,
    status,
    setStatus,
    reload: load,
  }
}
