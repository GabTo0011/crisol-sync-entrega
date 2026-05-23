import { notificationsMock } from '../mocks/notificaciones.mock'

const DB = {
  notifications: [...notificationsMock],
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchNotifications() {
  await wait(420)
  return [...DB.notifications].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
}

export async function markNotificationAsRead(id) {
  await wait(220)
  const idx = DB.notifications.findIndex((item) => item.id === id)
  if (idx < 0) return null
  DB.notifications[idx] = { ...DB.notifications[idx], leida: true }
  return DB.notifications[idx]
}
