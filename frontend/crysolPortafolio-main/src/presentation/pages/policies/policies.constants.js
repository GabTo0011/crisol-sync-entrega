/**
 * Constantes y contenido centralizado para la página de Políticas.
 * Facilita mantenimiento sin modificar componentes.
 */

export const POLICIES_SECTIONS = Object.freeze({
  USE_POLICY: {
    id: 'politica-uso',
    title: 'Política de Uso',
    content: [
      'El acceso a CRYSOL está limitado a usuarios autorizados que aceptan cumplir con esta política y todas las leyes aplicables.',
      'Está prohibido usar CRYSOL para actividades ilícitas, incluyendo pero no limitado a: fraude, evasión tributaria, falsificación, acceso no autorizado o distribución de malware.',
      'Los usuarios deben mantener la confidencialidad de sus credenciales y reportar inmediatamente cualquier acceso no autorizado a soporte@crysol.app.',
      'CRYSOL se reserva el derecho de suspender o cancelar cuentas que violen esta política, sin derecho a reembolso.',
    ],
  },
  COMMERCIAL_USE: {
    id: 'uso-comercial',
    title: 'Uso Comercial y B2B',
    content: [
      'Si utilizas CRYSOL en contexto comercial o empresarial, debes contar con la licencia empresarial correspondiente.',
      'Los planes empresariales incluyen SLA de disponibilidad, soporte prioritario y acceso a APIs especializadas.',
      'Reventa, redistribución o integración no autorizada de CRYSOL en terceros está prohibida.',
      'Para consultas sobre licencias empresariales, contacta a ventas@crysol.app.',
    ],
  },
  ACCEPTABLE_USE: {
    id: 'uso-aceptable',
    title: 'Uso Aceptable y Prohibiciones',
    content: [
      'No debes escanear, romper seguridad, intentar acceso no autorizado o realizar ingeniería inversa de CRYSOL.',
      'Está prohibido usar CRYSOL para hospedar, distribuir o transmitir contenido ilegal, obsceno o ofensivo.',
      'No puedes usar bots automatizados, scrapers o herramientas de extracción masiva sin autorización explícita.',
      'Está prohibido interferir con el funcionamiento de CRYSOL o con otros usuarios, incluyendo ataques de denegación de servicio.',
      'Cualquier violación resultará en terminación inmediata de acceso y posible acción legal.',
    ],
  },
  DATA_RETENTION: {
    id: 'retencion-datos',
    title: 'Retención y Backup de Datos',
    content: [
      'CRYSOL mantiene backups automáticos de datos del usuario con redundancia en múltiples centros de datos.',
      'En caso de pérdida de datos debido a error del usuario (eliminación accidental), se puede recuperar desde backups hasta 30 días antes.',
      'Después de 30 días sin backup, los datos no pueden ser recuperados. El usuario es responsable de mantener copias de seguridad adicionales si es crítico.',
      'Tras cancelación de cuenta, los datos se retienen por 90 días para cumplimiento legal, luego se eliminan permanentemente.',
    ],
  },
  SECURITY_MEASURES: {
    id: 'seguridad',
    title: 'Medidas de Seguridad',
    content: [
      'CRYSOL implementa encriptación AES-256 para datos en reposo y TLS 1.3 para datos en tránsito.',
      'Todos los documentos digitales se procesan en servidores aislados en redes privadas virtuales (VPN).',
      'Realizamos auditorías de seguridad trimestrales con terceros independientes certificados en ISO 27001.',
      'Los accesos se registran y monitoreamos en tiempo real para detectar actividades sospechosas.',
      'No obstante estas medidas, CRYSOL no puede garantizar seguridad absoluta. El usuario acepta riesgos inherentes a cualquier sistema conectado a internet.',
    ],
  },
  DOCUMENT_PROCESSING: {
    id: 'procesamiento',
    title: 'Procesamiento de Documentos',
    content: [
      'Los documentos subidos a CRYSOL se procesan mediante OCR, análisis de inteligencia artificial y validación automática.',
      'Los documentos originales se almacenan encriptados y no se comparten con terceros sin consentimiento.',
      'Durante procesamiento OCR, los documentos se transfieren a servidores de procesamiento en servidores ISO 27001 certificados.',
      'Documentos sensibles (certificados digitales, datos tributarios) se tratan conforme a regulaciones tributarias y de privacidad.',
    ],
  },
  INTELLECTUAL_PROPERTY: {
    id: 'propiedad-intelectual',
    title: 'Propiedad Intelectual',
    content: [
      'Todo contenido de CRYSOL (código, diseño, reportes, algoritmos) es propiedad exclusiva de CRYSOL y está protegido por copyright.',
      'No se permite copiar, reproducir, modificar o distribuir el contenido de CRYSOL sin autorización escrita.',
      'Los usuarios retienen propiedad de los documentos que suben a CRYSOL, y nos autorizan a procesarlos para prestar el servicio.',
      'Análisis agregados o reportes anónimos derivados de datos de múltiples usuarios pueden ser utilizados por CRYSOL para mejorar el servicio.',
    ],
  },
  SERVICE_AVAILABILITY: {
    id: 'disponibilidad',
    title: 'Disponibilidad del Servicio',
    content: [
      'CRYSOL se compromete a mantener disponibilidad del 99.5% medida mensualmente, excluyendo mantenimiento programado.',
      'Mantenimiento programado se realiza típicamente los domingos 02:00-04:00 UTC. Notificaremos cambios con 48 horas de anticipación.',
      'No se garantiza disponibilidad durante interrupciones de terceros (proveedores de internet, centros de datos, servicios externos).',
      'En caso de incumplimiento de SLA, clientes empresariales tienen derecho a créditos según contrato específico.',
    ],
  },
  FEES_AND_PAYMENT: {
    id: 'tarifas',
    title: 'Tarifas y Pagos',
    content: [
      'Las tarifas de CRYSOL se especifican en la página de planes. Los precios están en CLP y pueden cambiar con 30 días de notificación.',
      'Las suscripciones se renuevan automáticamente al final del período de facturación. Puedes cancelar en cualquier momento desde tu cuenta.',
      'Pagos rechazados resultan en suspensión de cuenta. Si el pago no se resuelve en 15 días, la cuenta se cancela y los datos se eliminan.',
      'Los reembolsos no se otorgan excepto por error de facturación. Solicita reembolsos dentro de 30 días del cargo en soporte@crysol.app.',
    ],
  },
  DISPUTE_RESOLUTION: {
    id: 'disputas',
    title: 'Resolución de Disputas',
    content: [
      'Cualquier disputa entre usuario y CRYSOL será resuelta primero mediante negociación amistosa entre las partes.',
      'Si la negociación falla, se someterá a mediación bajo leyes de la jurisdicción aplicable (Chile).',
      'El usuario acepta que cualquier litigio se llevará exclusivamente en tribunales competentes de Santiago, Chile.',
      'El usuario renuncia a cualquier reclamo de clase o procesal colectivo contra CRYSOL.',
    ],
  },
  POLICY_UPDATES: {
    id: 'actualizaciones',
    title: 'Actualizaciones de Política',
    content: [
      'CRYSOL se reserva el derecho de actualizar esta política en cualquier momento publicando una nueva versión en la plataforma.',
      'El uso continuado después de actualizaciones constituye aceptación de la nueva política.',
      'Cambios significativos se notificarán por email con 30 días de anticipación permitiendo cancelación sin penalidad.',
      'El historial de versiones está disponible en soporte@crysol.app para referencias.',
    ],
  },
});

/**
 * Obtiene todas las secciones de políticas en orden.
 * @returns {Array<Object>} Arreglo de secciones con id, title y content
 */
export function getPoliciesSectionsList() {
  return Object.values(POLICIES_SECTIONS);
}

/**
 * Busca una sección de políticas por su ID.
 * @param {string} sectionId Identificador único de la sección
 * @returns {Object|null} Objeto de sección o null si no existe
 */
export function getPoliciesSectionById(sectionId) {
  return Object.values(POLICIES_SECTIONS).find((section) => section.id === sectionId) || null;
}
