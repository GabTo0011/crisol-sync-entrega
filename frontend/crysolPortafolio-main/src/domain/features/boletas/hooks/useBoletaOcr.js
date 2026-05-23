import { useState } from 'react'
import { createBoleta, processBoletaOcr } from '../services/boletas.service'

export function useBoletaOcr() {
  const [ocrData, setOcrData] = useState(null)
  const [loadingOcr, setLoadingOcr] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const runOcr = async (file) => {
    setLoadingOcr(true)
    setError('')

    try {
      const extracted = await processBoletaOcr(file)
      setOcrData(extracted)
      return extracted
    } catch {
      setError('No fue posible procesar OCR')
      return null
    } finally {
      setLoadingOcr(false)
    }
  }

  const saveBoleta = async (payload) => {
    setSaving(true)
    setError('')

    try {
      return await createBoleta(payload)
    } catch {
      setError('No fue posible guardar la boleta')
      return null
    } finally {
      setSaving(false)
    }
  }

  return {
    ocrData,
    loadingOcr,
    saving,
    error,
    setOcrData,
    runOcr,
    saveBoleta,
  }
}
