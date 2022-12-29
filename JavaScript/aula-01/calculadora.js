// calculadora arrow function

const calculadora = (number1, number2, operation) => {
//function calculadora(number1, number2, operation) {

    let result

    switch (operation) {
        case "+":
            result = number1 + number2
            break;
        
        case "-":
            result = number1 - number2
            break;
            
        case "*":
            result = number1 * number2
             break;
    
        case "/":
            result = number1 / number2
            break;
        

        default:
            result = 'Algum erro aconteceu'
            break;
    }

 return result
}

console.log(calculadora(4,5,'*'))
console.log(calculadora(10,5,'-'))
console.log(calculadora(40,5,'/'))
console.log(calculadora(4,5,'+'))
console.log(calculadora(4,5,'x'))