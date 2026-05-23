import { useCallback, useEffect, useState } from 'react'
import { fetchReportHistory, fetchReportTypes, generateReport } from '../services/reportes.service'

export function useReportes() {
  const [types, setTypes] = useState([])
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const [reportTypes, reportHistory] = await Promise.all([fetchReportTypes(), fetchReportHistory()])
      setTypes(reportTypes)
      setHistory(reportHistory)
    } catch {
      setError('No fue posible cargar reportes')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const generate = async (payload) => {
    setGenerating(true)
    setError('')

    try {
      const created = await generateReport(payload)
      setHistory((prev) => [
        {
          id: created.id,
          tipo: created.tipo,
          formato: created.formato,
          fecha: created.createdAt.slice(0, 10),
          generadoPor: 'Usuario actual',
        },
        ...prev,
      ])
      return created
    } catch {
      setError('No fue posible generar el reporte')
      return null
    } finally {
      setGenerating(false)
    }
  }

  return {
    types,
    history,
    loading,
    generating,
    error,
    reload: load,
    generate,
  }
}
