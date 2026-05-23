import { Link } from 'react-router-dom'

const LoginCard = ({
  error,
  email,
  password,
  remember,
  loading,
  googleButtonRef,
  showGoogleFallback,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onRememberChange,
  onGoogleFallback,
}) => {
  return (
    <article className="login-card">
      <header className="login-card-header">
        <h2 className="login-card-title">Bienvenido</h2>
      </header>

      <div className={`login-alert ${error ? 'is-visible' : ''}`} role="alert" aria-live="polite">
        {error || ''}
      </div>

      <form className="login-form" onSubmit={onSubmit} noValidate>
        <div className="login-field">
          <label className="login-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="login-input"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>

        <div className="login-field">
          <div className="login-field-head">
            <label className="login-label" htmlFor="password">
              Contraseña
            </label>
            <button type="button" className="login-link-button">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <input
            id="password"
            className="login-input"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </div>

        <label className="login-remember">
          <input type="checkbox" checked={remember} onChange={onRememberChange} />
          <span>Recordarme por 30 días</span>
        </label>

        <button className="login-submit" type="submit" disabled={loading}>
          {loading ? 'Ingresando…' : 'Entrar'}
        </button>
      </form>

      <div className="login-divider" aria-hidden="true">
        <span>o</span>
      </div>

      <section className="login-google" aria-label="Inicio de sesión con Google">
        <div ref={googleButtonRef} className="login-google-renderer" />

        {showGoogleFallback ? (
          <button type="button" className="login-google-fallback" onClick={onGoogleFallback}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.2 32.9 29 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 6 1.2 8.2 3.1l5.7-5.7C34.2 5.6 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.1-.4-3.5Z" />
              <path fill="#FF3D00" d="M6.3 14.7 12.9 19.5C14.7 15.1 18.9 12 24 12c3.1 0 6 1.2 8.2 3.1l5.7-5.7C34.2 5.6 29.4 4 24 4 16.2 4 9.4 8.4 6.3 14.7Z" />
              <path fill="#4CAF50" d="M24 44c5.3 0 10.1-1.8 13.9-4.9l-6.4-5.2C29.5 35.8 26.9 36 24 36c-5 0-9.2-3.1-11-7.4l-6.6 5.1C9.4 39.6 16.2 44 24 44Z" />
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.8-2.9 5.1-5.4 6.4l.1-.1 6.4 5.2C35.9 37.5 40 32 40 24c0-1.3-.1-2.1-.4-3.5Z" />
            </svg>
            <span>Iniciar sesión con Google</span>
          </button>
        ) : null}
      </section>

      <footer className="login-register-footer">
        <span>¿No tienes cuenta?</span>
        <Link className="login-register-link" to="/registrar">
          Registrate
        </Link>
      </footer>
    </article>
  )
}

export default LoginCard