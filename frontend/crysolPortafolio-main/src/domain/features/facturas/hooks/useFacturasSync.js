import { useState } from 'react'
import { syncFacturas } from '../services/facturas.service'

export function useFacturasSync() {
  const [syncing, setSyncing] = useState(false)
  const [lastSync, setLastSync] = useState('')

  const syncNow = async () => {
    setSyncing(true)
    try {
      const result = await syncFacturas()
      setLastSync(result.syncedAt)
      return result
    } finally {
      setSyncing(false)
    }
  }

  return {
    syncing,
    lastSync,
    syncNow,
  }
}
