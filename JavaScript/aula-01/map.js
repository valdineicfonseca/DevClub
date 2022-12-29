// MAP 

const numbers = [1, 2, 3, 4]

const students = [
    { name: 'Val', age: 43 },
    { name: 'Carlos', age: 20 },
    { name: 'Maria', age: 30 },
    { name: 'Mara', age: 25 },
    { name: 'Cleiton', age: 20 },
]

// Cria um novo array MAP

const newArray = numbers.map((numbers) => {
    return numbers * 2
})

console.log(numbers)
console.log(newArray)


//Novo array mudando sobrenome e idade
const newStudents = students.map((s_item) => {
    const newVarStud = {
        name: s_item.name + ' da Silva',
        age: s_item.age - 5
    }
    return newVarStud

})

console.log(newStudents)