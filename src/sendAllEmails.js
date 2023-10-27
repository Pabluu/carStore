import { listEmails } from './database/listEmails.js'
import { enviaEmail } from './envia-email.js'

export function sendAllEmails() {
  const arrayEmail = listEmails

  arrayEmail.forEach((email) => {
    if (email.toReceive) {
      console.log(enviaEmail(email))
    }
  })
}
