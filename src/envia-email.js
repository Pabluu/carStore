import { bodyEmail } from './subtask/bodyEmail.js'

export function enviaEmail(objectEmail) {
  const { email } = objectEmail
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if (!regexEmail.test(email)) {
    return 'Email inválido'
  }

  return bodyEmail(objectEmail)
}
