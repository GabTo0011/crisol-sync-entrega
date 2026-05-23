/**
 * Componente reutilizable para renderizar una sección individual de políticas.
 * @param {Object} props Propiedades del componente
 * @param {string} props.title Título de la sección
 * @param {string[]} props.content Lista de párrafos/puntos
 * @param {string} [props.id] ID HTML para navegación por hash
 * @returns {JSX.Element} Elemento de sección
 */
export default function PolicySection({ title, content = [], id = '' }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-slate-200 py-6 last:border-b-0 dark:border-slate-700 sm:py-8"
    >
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base sm:space-y-4">
        {Array.isArray(content) && content.length > 0 ? (
          content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="italic text-slate-500 dark:text-slate-400">Sin contenido disponible</p>
        )}
      </div>
    </section>
  );
}
