import { facturasMock } from '../mocks/facturas.mock'

const DB = {
  facturas: [...facturasMock],
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const addDaysRemaining = (factura) => {
  const limit = new Date(factura.fechaRecepcion)
  limit.setDate(limit.getDate() + 8)
  const now = new Date()
  const diff = Math.ceil((limit.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  return {
    ...factura,
    diasRestantes: diff,
  }
}

export async function fetchFacturas() {
  await wait(550)
  return DB.facturas.map(addDaysRemaining).sort((a, b) => b.fechaRecepcion.localeCompare(a.fechaRecepcion))
}

export async function fetchFacturaById(id) {
  await wait(350)
  const found = DB.facturas.find((item) => item.id === id)
  return found ? addDaysRemaining(found) : null
}

export async function acceptFactura(id) {
  await wait(400)
  const idx = DB.facturas.findIndex((item) => item.id === id)
  if (idx < 0) return null
  DB.facturas[idx] = { ...DB.facturas[idx], estado: 'aceptada' }
  return addDaysRemaining(DB.facturas[idx])
}

export async function rejectFactura(id) {
  await wait(400)
  const idx = DB.facturas.findIndex((item) => item.id === id)
  if (idx < 0) return null
  DB.facturas[idx] = { ...DB.facturas[idx], estado: 'rechazada' }
  return addDaysRemaining(DB.facturas[idx])
}

export async function syncFacturas() {
  await wait(900)
  return {
    syncedAt: new Date().toISOString(),
    count: DB.facturas.length,
  }
}
