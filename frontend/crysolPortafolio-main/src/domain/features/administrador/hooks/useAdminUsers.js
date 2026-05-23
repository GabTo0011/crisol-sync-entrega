import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchAdminUsers, inviteAdminUser, toggleAdminUserStatus } from '../services/adminUsers.service'

const EMPTY_FORM = {
  name: '',
  email: '',
  role: 'operador',
}

export function useAdminUsers() {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [role, setRole] = useState('todos')
  const [status, setStatus] = useState('todos')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [processingId, setProcessingId] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchAdminUsers()
      setUsers(data)
    } catch {
      setError('No fue posible cargar los usuarios')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const filteredUsers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return users.filter((item) => {
      const matchesRole = role === 'todos' || item.role === role
      const matchesStatus = status === 'todos' || item.status === status

      if (!normalizedQuery) return matchesRole && matchesStatus

      const haystack = `${item.name} ${item.email}`.toLowerCase()
      return matchesRole && matchesStatus && haystack.includes(normalizedQuery)
    })
  }, [users, query, role, status])

  const summary = useMemo(
    () => ({
      total: users.length,
      active: users.filter((item) => item.status === 'activo').length,
      invited: users.filter((item) => item.status === 'invitado').length,
      admins: users.filter((item) => item.role === 'admin').length,
    }),
    [users],
  )

  const inviteUser = useCallback(async (form) => {
    setSaving(true)

    try {
      await inviteAdminUser(form)
      await load()
      return { ok: true, form: EMPTY_FORM }
    } catch (requestError) {
      if (requestError.message === 'ERR_ADMIN_USER_EXISTS') {
        return { ok: false, error: 'El correo ya existe en el sistema' }
      }
      return { ok: false, error: 'No se pudo enviar la invitacion' }
    } finally {
      setSaving(false)
    }
  }, [load])

  const toggleUserStatus = useCallback(async (userId) => {
    setProcessingId(userId)

    try {
      await toggleAdminUserStatus(userId)
      await load()
    } catch {
      setError('No se pudo actualizar el estado del usuario')
    } finally {
      setProcessingId('')
    }
  }, [load])

  return {
    users: filteredUsers,
    loading,
    saving,
    error,
    processingId,
    query,
    role,
    status,
    summary,
    setQuery,
    setRole,
    setStatus,
    inviteUser,
    toggleUserStatus,
    reload: load,
  }
}
