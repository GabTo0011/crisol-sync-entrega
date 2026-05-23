import { reportHistoryMock, reportTypesMock } from '../mocks/reportes.mock'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchReportTypes() {
  await wait(280)
  return reportTypesMock
}

export async function fetchReportHistory() {
  await wait(320)
  return reportHistoryMock
}

export async function generateReport({ tipo, formato, desde, hasta }) {
  await wait(700)
  return {
    id: `rep-${Date.now()}`,
    tipo,
    formato,
    desde,
    hasta,
    createdAt: new Date().toISOString(),
    downloadUrl: '#',
  }
}
