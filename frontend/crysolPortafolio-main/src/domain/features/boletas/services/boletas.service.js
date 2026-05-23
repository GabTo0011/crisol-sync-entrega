import { boletasMock, ocrTemplatesMock } from '../mocks/boletas.mock'
import { runBoletaOcr } from './ocr.service'

const DB = {
  boletas: [...boletasMock],
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchBoletas() {
  await wait(500)
  return [...DB.boletas].sort((a, b) => b.fecha.localeCompare(a.fecha))
}

export async function fetchBoletaById(id) {
  await wait(350)
  return DB.boletas.find((item) => item.id === id) || null
}

export async function createBoleta(payload) {
  await wait(450)
  const next = {
    ...payload,
    id: `bol-${Date.now()}`,
    estado: 'registrada',
  }
  DB.boletas.unshift(next)
  return next
}

export async function updateBoleta(id, patch) {
  await wait(350)
  const index = DB.boletas.findIndex((item) => item.id === id)
  if (index < 0) return null
  DB.boletas[index] = { ...DB.boletas[index], ...patch }
  return DB.boletas[index]
}

export async function cancelBoleta(id) {
  return updateBoleta(id, { estado: 'anulada' })
}

export async function deleteBoleta(id) {
  await wait(350)
  const index = DB.boletas.findIndex((item) => item.id === id)
  if (index < 0) return false
  DB.boletas.splice(index, 1)
  return true
}

export async function processBoletaOcr(file) {
  if (file) {
    try {
      return await runBoletaOcr(file)
    } catch {
      // fallback al mock si Tesseract falla
    }
  }

  await wait(1400)
  const sample = ocrTemplatesMock[Math.floor(Math.random() * ocrTemplatesMock.length)]
  return {
    comercio: sample.comercio,
    fecha: sample.fecha,
    monto: sample.monto,
    categoria: sample.categoria,
    ocrConfidence: sample.confidence,
  }
}
