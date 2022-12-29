console.log("Teste JavaScript")

// Variaveis

// nao indicado usar o var
var number1 = 1

let number2 =2

// nao antera o valor
const number3 = 3

number1=10
number2=20


console.log(number1)
console.log(number2)
console.log(number3)

// Tipos de dados

let myFisrtString="Variavel em texto em String"
let mySeccondString='Com aspas simples String'
let myThirdString='Com crase String'

let text = 'Usando aspas na "String" é possivel utilizar aspas o inverso tambem funciona'

let myText = `É possivel pulando varias linhas 
com crase  e uma variavel ${10 + 20 * 4} `

console.log(myText)

// Numbers

const numberOne = 234/2
console.log(numberOne)

/* Object em JavaScript
   
  Atribultos - Propriedades
  Metodos  - Acao
*/

const pesorn = {
    name: "Valdinei",
    age: 43,
    sex: "male",
    height: 1.67,
    // Objeto dentro de objeto
    addres: {
        Street: "Sete de Setembro",
        number: 3837,
        country: "Brazil"
    }
}

console.log(pesorn)
console.log(pesorn.name)
console.log(pesorn.age)

console.log(pesorn.addres.country)

// Tipo dados Boolean

let myNumOne = 10
let myNumTwo = 20

// comparando valores verdadeira ou falso
console.log(myNumOne == myNumTwo)

// ARRAY - Vetor - Lista

const numbers = [10, 20, 30 ,40]

console.log(numbers)

const users = [
    {name: "User1",
     age: 17    
    },
    {name: "User2",
     age: 28    
    },
    {name: "User3",
     age: 29    
    }
]

console.log(users[0])
443043