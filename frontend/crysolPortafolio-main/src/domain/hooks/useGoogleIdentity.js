import { useEffect, useRef, useState } from 'react'

const GOOGLE_GSI_SRC = 'https://accounts.google.com/gsi/client'

export function useGoogleIdentity({ clientId, callback }) {
  const buttonRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!clientId || !callback) return undefined

    let cancelled = false

    const initGoogleButton = () => {
      if (cancelled || !window.google?.accounts?.id || !buttonRef.current) return

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback,
      })

      buttonRef.current.innerHTML = ''
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: 'outline',
        size: 'large',
        shape: 'pill',
        text: 'signin_with',
        logo_alignment: 'left',
        width: 300,
      })

      setIsReady(true)
    }

    if (window.google?.accounts?.id) {
      initGoogleButton()
      return () => {
        cancelled = true
      }
    }

    const existingScript = document.querySelector(`script[src='${GOOGLE_GSI_SRC}']`)

    if (existingScript) {
      existingScript.addEventListener('load', initGoogleButton)
      return () => {
        cancelled = true
        existingScript.removeEventListener('load', initGoogleButton)
      }
    }

    const script = document.createElement('script')
    script.src = GOOGLE_GSI_SRC
    script.async = true
    script.defer = true
    script.addEventListener('load', initGoogleButton)
    document.head.appendChild(script)

    return () => {
      cancelled = true
      script.removeEventListener('load', initGoogleButton)
    }
  }, [callback, clientId])

  return {
    buttonRef,
    isReady,
  }
}