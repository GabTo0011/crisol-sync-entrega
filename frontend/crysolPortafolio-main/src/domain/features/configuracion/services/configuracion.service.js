const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let currentCertificate = null

export async function fetchCurrentCertificate() {
  await wait(300)
  return currentCertificate
}

export async function uploadCertificate(file) {
  await wait(800)
  currentCertificate = {
    fileName: file.name,
    mimeType: file.type || 'application/octet-stream',
    size: file.size,
    uploadedAt: new Date().toISOString(),
    status: 'activo',
  }
  return currentCertificate
}
