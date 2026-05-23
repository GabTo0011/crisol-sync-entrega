import { Link } from 'react-router-dom'

const RegisterCard = ({
  error,
  fullName,
  email,
  password,
  confirmPassword,
  acceptTerms,
  loading,
  onSubmit,
  onFullNameChange,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onAcceptTermsChange,
}) => {
  return (
    <article className="register-card">
      <header className="register-card-header">
        <h2 className="register-card-title">Registrar usuario</h2>
      </header>

      <div className={`login-alert ${error ? 'is-visible' : ''}`} role="alert" aria-live="polite">
        {error || ''}
      </div>

      <form className="register-form" onSubmit={onSubmit} noValidate>
        <div className="login-field">
          <label className="login-label" htmlFor="fullName">
            Nombre completo
          </label>
          <input
            id="fullName"
            className="login-input"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            value={fullName}
            onChange={onFullNameChange}
            required
          />
        </div>

        <div className="login-field">
          <label className="login-label" htmlFor="registerEmail">
            Email
          </label>
          <input
            id="registerEmail"
            className="login-input"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>

        <div className="register-grid">
          <div className="login-field">
            <label className="login-label" htmlFor="registerPassword">
              Contraseña
            </label>
            <input
              id="registerPassword"
              className="login-input"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={onPasswordChange}
              required
            />
          </div>

          <div className="login-field">
            <label className="login-label" htmlFor="confirmPassword">
              Confirmar contraseña
            </label>
            <input
              id="confirmPassword"
              className="login-input"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              required
            />
          </div>
        </div>

        <label className="register-terms">
          <input type="checkbox" checked={acceptTerms} onChange={onAcceptTermsChange} />
          <span>Acepto términos y políticas de privacidad</span>
        </label>

        <button className="login-submit" type="submit" disabled={loading}>
          {loading ? 'Creando cuenta...' : 'Crear cuenta'}
        </button>
      </form>

      <footer className="register-footer">
        <span>¿Ya tienes cuenta?</span>
        <Link className="register-link" to="/login">
          Inicia sesión
        </Link>
      </footer>
    </article>
  )
}

export default RegisterCard
