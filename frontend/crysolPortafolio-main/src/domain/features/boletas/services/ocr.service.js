import { createWorker } from 'tesseract.js'
import { boletaCategorias } from '../mocks/boletas.mock'

/**
 * Ejecuta OCR sobre un archivo de imagen usando Tesseract.js.
 * @param {File} file Imagen de la boleta (JPG/PNG)
 * @returns {Promise<string>} Texto extraído
 */
async function extractText(file) {
  const worker = await createWorker('spa', 1, {
    logger: () => {},
  })
  const imageUrl = URL.createObjectURL(file)
  try {
    const { data } = await worker.recognize(imageUrl)
    return data.text
  } finally {
    URL.revokeObjectURL(imageUrl)
    await worker.terminate()
  }
}

/**
 * Intenta parsear una fecha desde texto OCR.
 * Soporta formatos: DD/MM/YYYY, DD-MM-YYYY, DD.MM.YYYY
 * @param {string} text Texto OCR
 * @returns {string} Fecha en formato YYYY-MM-DD o cadena vacía
 */
function parseDate(text) {
  const patterns = [
    /(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/,
    /(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})/,
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match) {
      const [, a, b, c] = match
      if (a.length === 4) {
        return `${a}-${b.padStart(2, '0')}-${c.padStart(2, '0')}`
      }
      return `${c}-${b.padStart(2, '0')}-${a.padStart(2, '0')}`
    }
  }

  return new Date().toISOString().slice(0, 10)
}

/**
 * Intenta extraer el monto desde texto OCR.
 * Busca patrones como $1.234, $12.345, 1234, TOTAL: 5000, etc.
 * @param {string} text Texto OCR
 * @returns {number} Monto extraído o 0
 */
function parseMonto(text) {
  const patterns = [
    /total[:\s]+\$?\s*([\d\.]+)/i,
    /monto[:\s]+\$?\s*([\d\.]+)/i,
    /\$\s*([\d\.]{3,})/,
    /\b([\d]{1,3}(?:\.[\d]{3})+)\b/,
  ]

  for (const pattern of patterns) {
    const match = text.match(pattern)
    if (match) {
      const raw = match[1].replace(/\./g, '')
      const value = parseInt(raw, 10)
      if (!isNaN(value) && value > 0) return value
    }
  }

  return 0
}

/**
 * Intenta extraer el nombre del comercio desde el texto OCR.
 * Toma las primeras líneas no vacías como candidatos.
 * @param {string} text Texto OCR
 * @returns {string} Nombre del comercio o cadena vacía
 */
function parseComercio(text) {
  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 3 && !/^\d+$/.test(line))

  return lines[0] || ''
}

/**
 * Intenta inferir la categoría basándose en palabras clave del texto.
 * @param {string} text Texto OCR
 * @returns {string} Categoría inferida
 */
function parseCategoria(text) {
  const lower = text.toLowerCase()

  const keywordMap = [
    { keywords: ['ferreteria', 'tornillo', 'pintura', 'clavo', 'materiales'], categoria: 'Insumos' },
    { keywords: ['combustible', 'bencina', 'petroleo', 'bus', 'taxi', 'estacionamiento'], categoria: 'Transporte' },
    { keywords: ['farmacia', 'medicamento', 'clinica', 'laboratorio'], categoria: 'Servicios' },
    { keywords: ['restaurant', 'almuerzo', 'comida', 'cafe', 'minimarket', 'supermercado', 'alimento'], categoria: 'Alimentacion' },
    { keywords: ['libreria', 'papel', 'cuaderno', 'lapiz', 'tinta', 'oficina'], categoria: 'Oficina' },
  ]

  for (const { keywords, categoria } of keywordMap) {
    if (keywords.some((kw) => lower.includes(kw))) return categoria
  }

  return boletaCategorias[0]
}

/**
 * Procesa una imagen de boleta con OCR real usando Tesseract.js.
 * @param {File} file Imagen de la boleta
 * @returns {Promise<{comercio: string, fecha: string, monto: number, categoria: string, ocrConfidence: number, rawText: string}>}
 */
export async function runBoletaOcr(file) {
  const text = await extractText(file)

  return {
    comercio: parseComercio(text),
    fecha: parseDate(text),
    monto: parseMonto(text),
    categoria: parseCategoria(text),
    ocrConfidence: null,
    rawText: text,
  }
}
