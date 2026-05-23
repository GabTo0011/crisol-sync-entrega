import { useCallback, useState } from 'react';
import PageHeader from '../../../shared/components/layout/PageHeader';
import TermsSection from './TermsSection';
import { getTermsSectionsList } from './terms.constants';

/**
 * Página completa de Términos y Condiciones.
 * Incluye índice navegable, secciones y checkbox de aceptación.
 * @returns {JSX.Element} Componente TermsPage
 */
export default function TermsPage() {
  const sections = getTermsSectionsList();
  const [agreed, setAgreed] = useState(false);

  /**
   * Realiza scroll suave hacia una sección específica por ID.
   * @param {string} sectionId ID HTML de la sección destino
   */
  const handleScrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PageHeader
        title="Términos y Condiciones"
        subtitle="Lee nuestras políticas de uso y términos legales"
      />

      <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-0 pb-22 lg:pb-6">
        {/* Índice Navegable */}
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
                  className="text-left text-sm text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
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
            <TermsSection
              key={section.id}
              id={section.id}
              title={section.title}
              content={section.content}
            />
          ))}
        </article>

        {/* Box de Aceptación */}
        <div className="mt-8 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20 sm:p-6">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree-terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-emerald-600 focus:ring-2 focus:ring-emerald-600 dark:border-slate-600 dark:bg-slate-900"
            />
            <label
              htmlFor="agree-terms"
              className="cursor-pointer text-sm text-slate-700 dark:text-slate-300 sm:text-base"
            >
              Declaro que he leído y acepto los Términos y Condiciones de CRYSOL. Entiendo que al
              utilizar la plataforma confirmo mi aceptación de estos términos.
            </label>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-slate-300 bg-white px-6 py-2 font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Atrás
          </button>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              disabled={!agreed}
              onClick={() => window.history.back()}
              className="rounded-lg bg-slate-600 px-6 py-2 font-medium text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:hover:bg-slate-600"
            >
              Rechazar
            </button>
            <button
              disabled={!agreed}
              onClick={() => window.history.back()}
              className="rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-emerald-700 dark:hover:bg-emerald-800"
            >
              Continuar
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

