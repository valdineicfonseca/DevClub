// array - splice, slice, pop e shift

const students = ['Joao', 'Maria', 'Pedro', 'Carla', 'Amelia', 'Mauricio']

// splice  tira item do array ou muda de lugar

// retira pedro e maria
students.splice(1,2)
console.log(students)

// colocar elemento entre posicoes
students.splice(1,0,'Valdinei')
console.log(students)

// retira joao e colocar elemento entre posicoes
students.splice(0,0,'Valdinei')
console.log(students)

// retira 2 joao e colocar elemento entre posicoes
students.splice(1,2,'Carlos')
console.log(students)

console.log('-----------')

const students1 = ['Joao', 'Maria', 'Pedro', 'Carla', 'Amelia', 'Mauricio']

// slice fatiar array - começa no 1 para no 2 ou pode ser somente tirar o 1 - nao modifica o array original
newStudents = students1.slice(1,2)
console.log(newStudents)

//pop retirar o ultimo item do array
students1.pop()
console.log(students1)

//pop retirar o primeiro item do array
students1.shift()
console.log(students1)