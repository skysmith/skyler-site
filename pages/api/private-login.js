import {
  createPrivateAccessToken,
  privateAccessSetCookie,
  verifyPrivatePassword
} from '../../lib/privateAccess'

function safeReturnTo(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) {
    return '/porchdesk/login'
  }

  return value
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
    return
  }

  const returnTo = safeReturnTo(req.body?.returnTo)

  if (!verifyPrivatePassword(req.body?.password)) {
    res.writeHead(303, { Location: `${returnTo.split('?')[0]}?error=1` })
    res.end()
    return
  }

  res.setHeader('Set-Cookie', privateAccessSetCookie(createPrivateAccessToken()))
  res.writeHead(303, { Location: returnTo })
  res.end()
}
