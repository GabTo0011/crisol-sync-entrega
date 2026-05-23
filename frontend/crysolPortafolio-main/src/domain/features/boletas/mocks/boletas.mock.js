export const boletasMock = [
  {
    id: 'bol-1001',
    fecha: '2026-04-10',
    comercio: 'Ferreteria San Jose',
    monto: 48990,
    categoria: 'Insumos',
    estado: 'registrada',
    ocrConfidence: 0.94,
    imagenUrl: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    observacion: 'Compra de materiales menores',
  },
  {
    id: 'bol-1002',
    fecha: '2026-04-08',
    comercio: 'Servicentro Costanera',
    monto: 72000,
    categoria: 'Transporte',
    estado: 'registrada',
    ocrConfidence: 0.88,
    imagenUrl: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop',
    observacion: 'Combustible para despacho',
  },
  {
    id: 'bol-1003',
    fecha: '2026-04-02',
    comercio: 'Libreria Atlas',
    monto: 15990,
    categoria: 'Oficina',
    estado: 'anulada',
    ocrConfidence: 0.91,
    imagenUrl: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1200&auto=format&fit=crop',
    observacion: 'Error en monto informado',
  },
]

export const boletaCategorias = ['Insumos', 'Transporte', 'Oficina', 'Alimentacion', 'Servicios']

export const ocrTemplatesMock = [
  {
    comercio: 'Minimarket Central',
    fecha: '2026-04-17',
    monto: 22990,
    categoria: 'Alimentacion',
    confidence: 0.86,
  },
  {
    comercio: 'Farmacia Alameda',
    fecha: '2026-04-16',
    monto: 13990,
    categoria: 'Servicios',
    confidence: 0.9,
  },
  {
    comercio: 'Ferreteria Sur',
    fecha: '2026-04-15',
    monto: 55990,
    categoria: 'Insumos',
    confidence: 0.93,
  },
]
