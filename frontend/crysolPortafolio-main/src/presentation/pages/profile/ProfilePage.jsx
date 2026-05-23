import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStoredUser } from '../../../infrastructure/services/auth.service';

/**
 * Página de perfil del usuario con interfaz profesional.
 * @returns {JSX.Element} Componente ProfilePage
 */
export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', rut: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        name: storedUser.name || '',
        email: storedUser.email || '',
        rut: storedUser.rut || '',
      });
    }
  }, []);

  /**
   * Obtiene las iniciales del nombre para el avatar.
   * @param {string} name Nombre completo
   * @returns {string} Iniciales
   */
  const getInitials = useCallback((name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }, []);

  /**
   * Valida los datos del formulario.
   * @param {Object} data Datos a validar
   * @returns {string} Mensaje de error o vacío si es válido
   */
  const validateForm = useCallback((data) => {
    if (!data.name?.trim()) return 'El nombre es requerido';
    if (!data.email?.trim()) return 'El email es requerido';
    if (!data.email.includes('@')) return 'Email inválido';
    if (data.name.length < 3) return 'El nombre debe tener al menos 3 caracteres';
    return '';
  }, []);

  /**
   * Maneja cambios en los inputs del formulario.
   * @param {Event} e Evento del input
   */
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  }, []);

  /**
   * Maneja el envío del formulario de edición.
   * @param {Event} e Evento del formulario
   */
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      localStorage.setItem('crysol_user', JSON.stringify(formData));
      setUser(formData);
      setSuccess('Perfil actualizado correctamente');
      setIsEditing(false);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Error al actualizar el perfil');
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm]);

  if (!user) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-2xl px-4 py-12 text-center">
          <div className="animate-pulse text-slate-500">Cargando perfil...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="mx-auto max-w-2xl space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-0 pb-22 lg:pb-6">
        {/* Header Card con Avatar */}
        <div className="rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-emerald-100 p-6 dark:border-emerald-800 dark:from-emerald-900/20 dark:to-emerald-900/10">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-emerald-700 text-2xl font-bold text-white shadow-lg">
                {getInitials(user.name)}
              </div>
            </div>

            {/* Información Rápida */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 truncate">
                {user.name}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {user.email}
              </p>
              {user.rut && (
                <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1 font-medium">
                  RUT: {user.rut}
                </p>
              )}
            </div>

            {/* Botón Editar */}
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:focus:ring-offset-slate-950 transition"
              >
                Editar
              </button>
            )}
          </div>
        </div>

        {/* Mensajes de Error y Éxito */}
        {error && (
          <div className="rounded-lg bg-red-50 p-4 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
            <div className="flex gap-3">
              <svg className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800">
            <div className="flex gap-3">
              <svg className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{success}</p>
            </div>
          </div>
        )}

        {/* Formulario Editable */}
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Sección: Información Personal */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Información Personal
              </h3>

              <div className="space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-3 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-offset-slate-900"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-3 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-offset-slate-900"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* RUT */}
                <div>
                  <label htmlFor="rut" className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    RUT (Opcional)
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-3 h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v10a2 2 0 002 2h5m0 0h5a2 2 0 002-2v-m0 0V5a2 2 0 00-2-2h-5m0 0H9m15 0h.01M9 21h.01M9 3h.01" />
                    </svg>
                    <input
                      id="rut"
                      type="text"
                      name="rut"
                      value={formData.rut}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-offset-slate-900"
                      placeholder="XX.XXX.XXX-X"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setFormData({
                    name: user.name || '',
                    email: user.email || '',
                    rut: user.rut || '',
                  });
                }}
                className="rounded-lg border border-slate-300 bg-white px-6 py-2.5 font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus:ring-slate-600 transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-emerald-600 px-6 py-2.5 font-medium text-white hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:focus:ring-offset-slate-900 transition"
              >
                {loading ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </form>
        ) : (
          /* Vista No-Editable */
          <>
            {/* Sección: Información Personal */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Información Personal
              </h3>

              <div className="space-y-4">
                {/* Nombre */}
                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Nombre Completo</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{user.name}</span>
                </div>

                {/* Email */}
                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Correo Electrónico</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{user.email}</span>
                </div>

                {/* RUT */}
                <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">RUT</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{user.rut || 'No registrado'}</span>
                </div>
              </div>
            </div>

            {/* Sección: Seguridad */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Seguridad
              </h3>

              <button
                onClick={() => alert('Función de cambiar contraseña próximamente disponible')}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Cambiar Contraseña</span>
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => alert('Sesiones múltiples próximamente disponible')}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition border-t border-slate-100 dark:border-slate-800"
              >
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Sesiones Activas</span>
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Sección: Legal */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                </svg>
                Legal
              </h3>

              <button
                onClick={() => window.open('/terminos', '_blank')}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Términos y Condiciones</span>
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => window.open('/politicas', '_blank')}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition border-t border-slate-100 dark:border-slate-800"
              >
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Políticas del Servicio</span>
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Sección: Zona de Peligro */}
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-900/20">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Zona de Peligro
              </h3>

              <button
                onClick={() => {
                  if (window.confirm('¿Deseas eliminar tu cuenta permanentemente? Esta acción no se puede deshacer.')) {
                    alert('Solicitud de eliminación enviada. Te contactaremos en 24 horas.');
                  }
                }}
                className="w-full py-2 px-4 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-offset-slate-900 transition"
              >
                Eliminar Cuenta Permanentemente
              </button>

              <p className="text-xs text-red-800 dark:text-red-300 mt-3">
                Esta acción es irreversible. Se eliminarán todos tus datos y documentos.
              </p>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
