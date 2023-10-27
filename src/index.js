import { sendAllEmails } from './sendAllEmails.js'
import { currentDay } from './subtask/currentDay.js'

function index() {
  let currentDate = ''
  const date = new Date('10/23/2023') // mm:dd:aaaa/

  try {
    currentDate = currentDay(date)
  } catch (error) {
    console.log('Data Inválida')
    return false
  }

  if (currentDate === false) {
    console.log('Data inválida')
  } else if (currentDate === 1) {
    sendAllEmails()
  } else {
    let diaSemana = [
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado',
    ]
    const dia = date.getDay()

    console.log(
      `De acordo com data atual, ${diaSemana[dia]}, não há email a serem enviados`
    )
  }
}

index()
