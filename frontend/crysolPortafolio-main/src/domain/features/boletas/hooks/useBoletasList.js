import { useCallback, useEffect, useMemo, useState } from 'react'
import { deleteBoleta, fetchBoletas } from '../services/boletas.service'

export function useBoletasList() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchBoletas()
      setItems(data)
    } catch {
      setError('No fue posible cargar las boletas')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return items
    return items.filter((item) =>
      [item.comercio, item.categoria, item.estado, item.id].some((field) => String(field).toLowerCase().includes(term)),
    )
  }, [items, query])

  const remove = useCallback(async (id) => {
    await deleteBoleta(id)
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  return {
    items: filtered,
    total: items.length,
    loading,
    error,
    query,
    setQuery,
    reload: load,
    remove,
  }
}
