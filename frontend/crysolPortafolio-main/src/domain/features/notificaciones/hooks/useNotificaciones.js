import { useCallback, useEffect, useState } from 'react'
import { fetchNotifications, markNotificationAsRead } from '../services/notificaciones.service'

export function useNotificaciones() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const notifications = await fetchNotifications()
      setItems(notifications)
    } catch {
      setError('No fue posible cargar notificaciones')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const markAsRead = async (id) => {
    const updated = await markNotificationAsRead(id)
    if (!updated) return null

    setItems((prev) => prev.map((item) => (item.id === id ? updated : item)))
    return updated
  }

  return {
    items,
    loading,
    error,
    reload: load,
    markAsRead,
  }
}
