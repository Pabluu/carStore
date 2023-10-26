export function enviaEmail(objectEmail) {
  const { to, subject, body } = objectEmail

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  if(!regexEmail.test(to)) {
    return "Email inválido"
  } 

  if(subject.length === 0) {
    return 'Assunto não pode ser vazio'
  }

  if(body.length === 0) {
    return 'O corpo do email não pode ser vazio'
  }

  return 'E-mail enviado com sucesso'
}
