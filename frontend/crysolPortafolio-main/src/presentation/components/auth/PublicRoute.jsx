import { Navigate } from 'react-router-dom'
import { getStoredUser } from '../../../infrastructure/services/auth.service'

const PublicRoute = ({ children }) => {
  const user = getStoredUser()

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default PublicRoute