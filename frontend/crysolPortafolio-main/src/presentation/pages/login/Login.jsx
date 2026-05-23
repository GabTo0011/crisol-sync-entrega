import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginHero from '../../components/auth/LoginHero'
import LoginCard from '../../components/auth/LoginCard'
import { getInitialTheme, setTheme } from '../../../shared/utils/theme'
import { getStoredUser, signIn, signInWithGoogleCredential } from '../../../infrastructure/services/auth.service'
import { useGoogleIdentity } from '../../../domain/hooks/useGoogleIdentity'
const GOOGLE_CLIENT_ID = '824239424492-jk5ajgg4i9e5uv8bgdld5u1mknht8jc0.apps.googleusercontent.com'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setTheme(getInitialTheme())

    const existing = getStoredUser()
    if (existing) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  const handleGoogleCredential = useMemo(
    () => (response) => {
      setError('')

      const credential = response?.credential
      if (!credential) {
        setError('No se recibió una credencial válida de Google')
        return
      }

      const result = signInWithGoogleCredential(credential)
      if (result.error) {
        setError(result.error)
        return
      }

      navigate('/dashboard', { replace: true })
    },
    [navigate],
  )

  const { buttonRef: googleButtonRef, isReady: googleReady } = useGoogleIdentity({
    clientId: GOOGLE_CLIENT_ID,
    callback: handleGoogleCredential,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!email.trim() || !password.trim()) {
      setError('Credenciales inválidas')
      return
    }

    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 250))
      signIn({ email, remember })
      navigate('/dashboard', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleFallback = () => {
    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt()
      return
    }

    setError('Google sign-in no está disponible en este entorno')
  }

  return (
    <main className="login-page">
      <section className="login-shell" aria-label="Acceso de usuario">
        <div className="login-stage">
          <LoginHero />
          <LoginCard
            error={error}
            email={email}
            password={password}
            remember={remember}
            loading={loading}
            googleButtonRef={googleButtonRef}
            showGoogleFallback={!googleReady}
            onSubmit={handleSubmit}
            onEmailChange={(event) => setEmail(event.target.value)}
            onPasswordChange={(event) => setPassword(event.target.value)}
            onRememberChange={(event) => setRemember(event.target.checked)}
            onGoogleFallback={handleGoogleFallback}
          />
        </div>
      </section>
    </main>
  )
}

export default Login