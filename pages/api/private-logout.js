import { privateAccessClearCookie } from '../../lib/privateAccess'

export default function handler(_req, res) {
  res.setHeader('Set-Cookie', privateAccessClearCookie())
  res.writeHead(303, { Location: '/porchdesk/login' })
  res.end()
}
