// for e while estrutura de repetição

for (let i = 0; i < 10; i++){
    console.log(i)
}

const students = ['Bruna','Ana','Joao','Maria','Pedro']

for (let index=0; index < students.length; index++){
    console.log(students[index])
}

//Enquanto 

let i2=0

while(i2 < 20){
    console.log('n ' + i2)
    i2+=2
}

// for of

let myName = 'Valdinei'
let allName = ['Maria','Joao','Pedro','Gilberto']

for (let name1 of myName){
    console.log(name1)
}

for (let name2 of allName){
    console.log(name2)
}

// for in para objetos

const student = {
    name:"Caio",
    age: 26,
    genre: "male",
}

for (let property in student){
    console.log(property)
    console.log(student[property])
}