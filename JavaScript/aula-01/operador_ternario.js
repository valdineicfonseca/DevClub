// Operador Ternario ?  se    : senao

const chuva = true
const guardaChuva = chuva ? 'levar guarda-chuva' : 'deixar guarda-chuva'

console.log(guardaChuva)

// Verdadeiro e falso  e &&  ou ||

const saldo = true
const naoBloqueado = true
const contaExiste = true

const transferirOk = saldo && naoBloqueado && contaExiste ? 'TRANSFERENCIA REALIZADA' : 'TRANSFERENCIA NEGADA'

console.log(transferirOk)
