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

export function getThemeKeys() {
  return {
    theme: THEME_STORAGE_KEY,
  }
}