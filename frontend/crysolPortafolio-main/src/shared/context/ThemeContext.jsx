import { createContext, useContext, useState, useEffect } from 'react'
import { getInitialTheme, setTheme } from '../utils/theme'

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const initialTheme = getInitialTheme()
    setIsDark(initialTheme === 'dark')
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider')
  }
  return context
}