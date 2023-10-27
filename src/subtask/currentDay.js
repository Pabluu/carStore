/*
  Função responsável por retornar o dia da semana de forma numerica
    0 - Domingo
    1 - Segunda
    ...
    6 - Sábado
*/

export function currentDay(date) {
  date = converDate(date)
  const regexDate = /^\d{2}\/\d{2}\/\d{4}$/

  if (!regexDate.test(date)) {
    return false
  }
  // Formate a date no formato desejado

  return new Date(date).getDay()
}

function converDate(date) {
  date = new Date(date)

  // Obtenha o dia, mês e ano
  let dia = date.getDate()
  let mes = date.getMonth() + 1 // Os meses em JavaScript são baseados em zero (janeiro é 0, fevereiro é 1, etc.)
  let ano = date.getFullYear()
  return (
    (mes < 10 ? '0' : '') + mes + '/' + (dia < 10 ? '0' : '') + dia + '/' + ano
  )
}
