import { Navigate } from 'react-router-dom'
import { getStoredUser } from '../../../infrastructure/services/auth.service'

const AuthRoute = ({ children }) => {
  const user = getStoredUser()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default AuthRoute