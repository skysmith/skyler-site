import { createHmac, timingSafeEqual } from 'crypto'

export const privateAccessCookieName = 'skyler_site_private'

const maxAgeSeconds = 60 * 60 * 24 * 30

function getPassword() {
  return process.env.SKYLER_SITE_PRIVATE_PASSWORD || ''
}

function getCookieSecret() {
  return process.env.SKYLER_SITE_PRIVATE_COOKIE_SECRET || getPassword()
}

function sign(value) {
  return createHmac('sha256', getCookieSecret()).update(value).digest('base64url')
}

function safeCompare(left, right) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)

  if (leftBuffer.length !== rightBuffer.length) {
    return false
  }

  return timingSafeEqual(leftBuffer, rightBuffer)
}

function parseCookies(cookieHeader = '') {
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const separatorIndex = part.indexOf('=')

        if (separatorIndex === -1) {
          return [part, '']
        }

        return [part.slice(0, separatorIndex), decodeURIComponent(part.slice(separatorIndex + 1))]
      })
  )
}

export function privatePasswordConfigured() {
  return Boolean(getPassword())
}

export function verifyPrivatePassword(password) {
  const expected = getPassword()

  if (!expected || typeof password !== 'string') {
    return false
  }

  return safeCompare(password, expected)
}

export function createPrivateAccessToken() {
  const issuedAt = Date.now().toString()

  return `${issuedAt}.${sign(issuedAt)}`
}

export function verifyPrivateAccess(cookieHeader) {
  const token = parseCookies(cookieHeader)[privateAccessCookieName]

  if (!token || !getCookieSecret()) {
    return false
  }

  const [issuedAt, signature] = token.split('.')
  const issuedAtMs = Number.parseInt(issuedAt, 10)

  if (!issuedAt || !signature || !Number.isFinite(issuedAtMs)) {
    return false
  }

  if (Date.now() - issuedAtMs > maxAgeSeconds * 1000) {
    return false
  }

  return safeCompare(signature, sign(issuedAt))
}

export function privateAccessSetCookie(token) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''

  return `${privateAccessCookieName}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAgeSeconds}${secure}`
}

export function privateAccessClearCookie() {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''

  return `${privateAccessCookieName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secure}`
}
