import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginHero from '../../components/auth/LoginHero'
import RegisterCard from '../../components/auth/RegisterCard'
import { getInitialTheme, setTheme } from '../../../shared/utils/theme'
import { getStoredUser, signIn } from '../../../infrastructure/services/auth.service'

const Register = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setTheme(getInitialTheme())

    const existing = getStoredUser()
    if (existing) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  const validateForm = () => {
    if (!fullName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      return 'Completa todos los campos requeridos'
    }

    if (!email.includes('@')) {
      return 'Debes ingresar un correo valido'
    }

    if (password.length < 8) {
      return 'La contrasena debe tener al menos 8 caracteres'
    }

    if (password !== confirmPassword) {
      return 'Las contrasenas no coinciden'
    }

    if (!acceptTerms) {
      return 'Debes aceptar los terminos para continuar'
    }

    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 250))
      signIn({ email, name: fullName, remember: true })
      navigate('/dashboard', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page">
      <section className="login-shell" aria-label="Registro de usuario">
        <div className="login-stage">
          <LoginHero />
          <RegisterCard
            error={error}
            fullName={fullName}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            acceptTerms={acceptTerms}
            loading={loading}
            onSubmit={handleSubmit}
            onFullNameChange={(event) => setFullName(event.target.value)}
            onEmailChange={(event) => setEmail(event.target.value)}
            onPasswordChange={(event) => setPassword(event.target.value)}
            onConfirmPasswordChange={(event) => setConfirmPassword(event.target.value)}
            onAcceptTermsChange={(event) => setAcceptTerms(event.target.checked)}
          />
        </div>
      </section>
    </main>
  )
}

export default Register
