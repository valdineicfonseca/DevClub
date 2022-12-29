// funcoes

function test(){
    console.log("funcao ok!")
}

test()

// parametros



function sum (number1, number2){
    console.log('Soma ', number1 + number2)
}

sum(2,3)

// returnar funcao

function sum(number1, number2) {
    //console.log(number1 + number2)
    return number1 + number2
}

const firstNumber = 10
const seccondNumber =  20

console.log(`O primeiro numero é ${firstNumber}`)
console.log(`O segundo numero é ${seccondNumber}`)
console.log(`A soma dos numeros é ${sum(firstNumber, seccondNumber)}`)


// Arrow Functioun

const sum1 =(n1, n2) => n1 + n2 // funcao com retorno automatico
console.log(sum1(5,5))