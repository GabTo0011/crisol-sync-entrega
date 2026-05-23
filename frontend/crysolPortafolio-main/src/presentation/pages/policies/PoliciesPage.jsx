import { useCallback, useState } from 'react';
import PageHeader from "../../../shared/components/layout/PageHeader";
import PolicySection from './PolicySection';
import { getPoliciesSectionsList } from './policies.constants';

/**
 * Página completa de Políticas del servicio CRYSOL.
 * Incluye índice navegable, secciones con scroll suave y mobile-first responsive design.
 * @returns {JSX.Element} Componente PoliciesPage
 */
export default function PoliciesPage() {
  const sections = getPoliciesSectionsList();
  const [expandedSection, setExpandedSection] = useState(null);

  /**
   * Realiza scroll suave hacia una sección específica por ID.
   * @param {string} sectionId ID HTML de la sección destino
   */
  const handleScrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setExpandedSection(sectionId);
    }
  }, []);

  /**
   * Toggle para expandir/contraer sección en vista mobile.
   * @param {string} sectionId ID de la sección a toggle
   */
  const handleToggleSection = useCallback((sectionId) => {
    setExpandedSection((prev) => (prev === sectionId ? null : sectionId));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PageHeader
        title="Políticas del Servicio"
        subtitle="Normas y guías de uso de la plataforma CRYSOL"
      />

      <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-0 pb-22 lg:pb-6">
        {/* Índice Navegable - Visible en Desktop, Colapsible en Mobile */}
        <nav
          className="mb-8 rounded-lg border border-slate-200 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-900/50 sm:p-6"
          aria-label="Tabla de contenidos"
        >
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-slate-100">
            Contenidos
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleScrollToSection(section.id)}
                  className="text-left text-sm text-emerald-600 hover:text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:text-emerald-400 dark:hover:text-emerald-300 dark:focus:ring-offset-slate-950"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Secciones de Contenido */}
        <article className="space-y-0">
          {sections.map((section) => (
            <div key={section.id}>
              {/* Header interactivo para mobile */}
              <button
                onClick={() => handleToggleSection(section.id)}
                className="block w-full px-0 py-6 text-left hover:bg-slate-100 dark:hover:bg-slate-900/30 sm:hidden"
                aria-expanded={expandedSection === section.id}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {section.title}
                  </h2>
                  <svg
                    className={`h-5 w-5 text-slate-500 transition-transform dark:text-slate-400 ${
                      expandedSection === section.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>

              {/* Contenido visible en desktop siempre, en mobile solo si expanded */}
              <div className={`${expandedSection === section.id || window.innerWidth >= 768 ? '' : 'hidden sm:block'}`}>
                <PolicySection
                  id={section.id}
                  title={section.title}
                  content={section.content}
                />
              </div>
            </div>
          ))}
        </article>

        {/* Box de Información Legal */}
        <div className="mt-8 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 sm:p-6">
          <div className="flex gap-3">
            <svg
              className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-medium">Nota Legal</p>
              <p className="mt-1">
                Estas políticas están en vigencia y son actualizadas periódicamente. Para cualquier duda o aclaración, 
                contacta a <a href="mailto:soporte@crysol.app" className="font-semibold underline">soporte@crysol.app</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus:ring-slate-600"
          >
            Atrás
          </button>
          <a
            href="mailto:soporte@crysol.app"
            className="rounded-lg bg-emerald-600 px-6 py-2 text-center font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:focus:ring-offset-slate-950"
          >
            Contactar Soporte
          </a>
        </div>
      </section>
    </main>
  );
}
