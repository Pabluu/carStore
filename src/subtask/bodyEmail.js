export function bodyEmail(objectEmail) {
  const { email, name } = objectEmail
  return `De: car.store@email.com
Para: ${email}
Assunto: Promoções Imperdíveis de Carros da Semana!
Corpo: Caro(a) ${name}. Espero que esta mensagem o encontre bem.
Na CarStore, estamos empolgados em apresentar a você nossas ofertas imperdíveis de carros para esta semana!
Se você está pensando em trocar de veículo ou simplesmente deseja aproveitar um grande negócio, esta é a sua chance. Confira algumas das nossas principais promoções:

Novo Modelo X-2000: Economize R$3.540,00 neste veículo topo de linha. Com recursos avançados de segurança e um design impressionante, o Modelo X-2000 é a escolha perfeita para quem busca sofisticação e desempenho.

Sedã Econômico Y: Leve para casa o nosso popular Sedã Econômico Y com uma taxa de financiamento especial de 13.5% por 80 meses. Este veículo é conhecido pela sua economia de combustível e conforto.

Não perca essa oportunidade de dirigir um carro novo com descontos excepcionais. Esperamos vê-lo em nossa concessionária em breve!

Atenciosamente,

CarStore LTDA


--------------------------------- // ---------------------------------
`
}
