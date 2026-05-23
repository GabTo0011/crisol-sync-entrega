/**
 * Constantes y contenido centralizado para la página de Términos y Condiciones.
 * Permite mantenimiento fácil sin modificar componentes.
 */

export const TERMS_SECTIONS = Object.freeze({
  ACCEPTANCE: {
    id: 'aceptacion',
    title: 'Aceptación de Términos',
    content: [
      'Al acceder y utilizar CRYSOL, aceptas estar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte, te recomendamos no utilizar el servicio.',
      'CRYSOL se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en esta página, y tu uso continuado del servicio implica aceptación de los nuevos términos.',
      'Eres responsable de revisar periódicamente estos términos para mantenerte informado sobre posibles actualizaciones.',
    ],
  },
  SERVICE_DESCRIPTION: {
    id: 'descripcion',
    title: 'Descripción del Servicio',
    content: [
      'CRYSOL es una plataforma de gestión financiera que utiliza tecnología Optical Character Recognition (OCR) para digitalizar y procesar documentos financieros como facturas, boletas y certificados digitales.',
      'Nuestro objetivo es automatizar el proceso de captura de datos financieros, permitiendo a los usuarios almacenar, clasificar y analizar sus documentos de forma segura y eficiente.',
      'El servicio incluye características como generación de reportes, integración con el SII (Servicio de Impuestos Internos) y certificados digitales para transacciones.',
    ],
  },
  OCR_ACCURACY: {
    id: 'ocr',
    title: 'Precisión de OCR y Validación',
    content: [
      'CRYSOL utiliza tecnología OCR avanzada, pero como toda tecnología, puede presentar errores de lectura especialmente en documentos de baja calidad o con caracteres poco legibles.',
      'No garantizamos una precisión del 100% en la extracción de datos. Recomendamos validar manualmente los datos extraídos antes de utilizarlos en transacciones críticas.',
      'El usuario es responsable de verificar la exactitud de los datos procesados antes de exportar o usar esta información en reportes tributarios o contables.',
    ],
  },
  DIGITAL_CERTIFICATE: {
    id: 'certificado',
    title: 'Certificados Digitales y Seguridad',
    content: [
      'Los certificados digitales procesados por CRYSOL son encriptados y almacenados conforme a estándares internacionales de seguridad.',
      'No compartimos certificados digitales con terceros sin consentimiento explícito del usuario, excepto cuando sea requerido por ley.',
      'Eres responsable de mantener la confidencialidad de tus credenciales de acceso. CRYSOL no es responsable por acceso no autorizado debido a contraseña comprometida.',
    ],
  },
  USER_RESPONSIBILITIES: {
    id: 'responsabilidades',
    title: 'Responsabilidades del Usuario',
    content: [
      'Garantizas que tienes derecho legal para acceder y utilizar CRYSOL. Solo personas autorizadas pueden procesar documentos financieros ajenos.',
      'Te comprometes a no utilizar CRYSOL para propósitos ilícitos, como evasión tributaria, falsificación de documentos o fraude.',
      'Eres responsable de mantener copias de seguridad de tus documentos originales. CRYSOL no reemplaza tus registros principales.',
    ],
  },
  DATA_PRIVACY: {
    id: 'privacidad',
    title: 'Privacidad de Datos y Cumplimiento LGPD',
    content: [
      'CRYSOL cumple con la Ley General de Protección de Datos (LGPD) de Brasil y leyes locales de privacidad donde opera. Tus datos se procesan únicamente para proporcionar el servicio.',
      'No vendemos ni compartimos tu información personal con terceros comerciales sin consentimiento explícito.',
      'Puedes solicitar acceso, corrección o eliminación de tus datos enviando un email a soporte@crysol.app.',
    ],
  },
  SII_INTEGRATION: {
    id: 'sii',
    title: 'Integración con SII (Servicio de Impuestos Internos)',
    content: [
      'Las facturas y documentos tributarios procesados pueden integrarse con el SII conforme a normativa tributaria chilena vigente.',
      'CRYSOL actúa como intermediaria facilitando la conexión. El usuario es responsable de asegurar que la información tributaria sea exacta y cumpla regulaciones.',
      'Cambios en normativa SII pueden requerir actualizaciones en CRYSOL. Nos comprometemos a implementarlos en tiempo oportuno.',
    ],
  },
  LIABILITY_LIMITATION: {
    id: 'limitacion',
    title: 'Limitación de Responsabilidad',
    content: [
      'CRYSOL se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos disponibilidad ininterrumpida ni libre de errores.',
      'En ningún caso CRYSOL será responsable por daños indirectos, pérdida de datos, lucro cesante o interrupciones de negocio resultantes del uso del servicio.',
      'La responsabilidad total de CRYSOL ante el usuario no excederá el monto pagado por el servicio en el período anterior.',
    ],
  },
  CHANGES_TO_TERMS: {
    id: 'cambios',
    title: 'Cambios en Términos',
    content: [
      'CRYSOL se reserva el derecho de modificar estos términos en cualquier momento. Notificaremos cambios significativos vía email o anuncio en la plataforma.',
      'Tu uso continuado de CRYSOL después de cambios constituye aceptación de los nuevos términos. Si no estás de acuerdo, puedes solicitar cancelación de tu cuenta.',
      'Cambios menores (correcciones, aclaraciones) pueden implementarse sin previo aviso.',
    ],
  },
  ACCOUNT_TERMINATION: {
    id: 'terminacion',
    title: 'Terminación de Cuenta',
    content: [
      'Puedes solicitar la cancelación de tu cuenta en cualquier momento contactando soporte@crysol.app.',
      'CRYSOL puede terminar tu acceso por incumplimiento de estos términos, incluyendo uso fraudulento o violación de derechos de terceros.',
      'Tras cancelación, tus datos se mantendrán según retención legal, luego serán eliminados conforme a política de privacidad.',
    ],
  },
  CONTACT: {
    id: 'contacto',
    title: 'Contacto y Soporte',
    content: [
      'Para preguntas sobre estos términos, contacta a soporte@crysol.app.',
      'Responderemos solicitudes de clarificación en máximo 5 días hábiles.',
      'Puedes también consultar nuestra Política de Privacidad y Guía de Uso disponibles en la plataforma.',
    ],
  },
});

/**
 * Obtiene todas las secciones de términos en orden.
 * @returns {Array<Object>} Arreglo de secciones con id, title y content
 */
export function getTermsSectionsList() {
  return Object.values(TERMS_SECTIONS);
}

/**
 * Busca una sección de términos por su ID.
 * @param {string} sectionId Identificador único de la sección
 * @returns {Object|null} Objeto de sección o null si no existe
 */
export function getTermsSectionById(sectionId) {
  return Object.values(TERMS_SECTIONS).find((section) => section.id === sectionId) || null;
}
