import { adminUsersMock } from '../mocks/adminUsers.mock'

const DB = {
  users: [...adminUsersMock],
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const byName = (left, right) => left.name.localeCompare(right.name)

export async function fetchAdminUsers() {
  await wait(320)
  return [...DB.users].sort(byName)
}

export async function inviteAdminUser({ name, email, role }) {
  await wait(360)
  const normalizedEmail = String(email || '').trim().toLowerCase()
  const alreadyExists = DB.users.some((item) => item.email === normalizedEmail)

  if (alreadyExists) {
    throw new Error('ERR_ADMIN_USER_EXISTS')
  }

  const user = {
    id: `usr-${Date.now()}`,
    name: String(name || '').trim(),
    email: normalizedEmail,
    role,
    status: 'invitado',
    lastLoginAt: null,
    createdAt: new Date().toISOString(),
  }

  DB.users = [user, ...DB.users]
  return user
}

export async function toggleAdminUserStatus(userId) {
  await wait(280)
  const index = DB.users.findIndex((item) => item.id === userId)
  if (index < 0) throw new Error('ERR_ADMIN_USER_NOT_FOUND')

  const current = DB.users[index]
  const nextStatus = current.status === 'bloqueado' ? 'activo' : 'bloqueado'

  DB.users[index] = {
    ...current,
    status: nextStatus,
  }

  return DB.users[index]
}
