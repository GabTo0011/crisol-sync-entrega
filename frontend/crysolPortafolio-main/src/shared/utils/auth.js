const AUTH_STORAGE_KEY = 'crysol-auth-user'
const THEME_STORAGE_KEY = 'crysol-theme'

export function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  const prefersDark =
    window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false

  return prefersDark ? 'dark' : 'light'
}

export function setTheme(theme) {
  if (typeof window === 'undefined') return

  document.documentElement.dataset.theme = theme
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function getStoredUser() {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function signOut() {
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(AUTH_STORAGE_KEY)
}

function buildIdentityFromEmail(email) {
  const local = String(email ?? '').split('@')[0] || 'usuario'
  const clean = local.replace(/[._-]+/g, ' ').trim()
  const parts = clean.split(/\s+/).filter(Boolean)

  const name = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

  const initials = parts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

  return {
    name: name || 'Usuario',
    initials: initials || 'U',
  }
}

function parseJwtPayload(token) {
  try {
    const payloadPart = String(token ?? '').split('.')[1]
    if (!payloadPart) return null

    const normalized = payloadPart.replace(/-/g, '+').replace(/_/g, '/')
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4)

    return JSON.parse(window.atob(padded))
  } catch {
    return null
  }
}

export function signIn({ email, remember = false, provider = 'password', name, picture }) {
  if (typeof window === 'undefined') return null

  const normalizedEmail = String(email ?? '').trim().toLowerCase()
  const identity = buildIdentityFromEmail(normalizedEmail)
  const user = {
    id: 'u_1',
    name: name || identity.name,
    email: normalizedEmail,
    initials: identity.initials,
    provider,
    remember,
    picture: picture || null,
  }

  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))

  return user
}

export function signInWithGoogleCredential(credential) {
  const payload = parseJwtPayload(credential)
  const email = payload?.email

  if (!email) {
    return { user: null, error: 'No se pudo validar la cuenta de Google' }
  }

  const user = signIn({
    email,
    provider: 'google',
    name: payload?.name,
    picture: payload?.picture || null,
  })

  return { user, error: null }
}

export function getAuthKeys() {
  return {
    auth: AUTH_STORAGE_KEY,
    theme: THEME_STORAGE_KEY,
  }
}