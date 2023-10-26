/*
  Função responsável por retornar o dia da semana de forma numerica
    0 - Domingo
    1 - Segunda
    ...
    6 - Sábado
*/

export function currentDay(date = new Date()){
  return date.getDay()
}