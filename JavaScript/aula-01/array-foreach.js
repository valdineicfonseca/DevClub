// array for each

const students = [
    {name:'Val', age:43},
    {name:'Carlos', age:20},
    {name:'Maria', age:30},
    {name:'Mara', age:25},
    {name:'Cleiton', age:20},
]

let allStudentsAge = 0

// function arrows
students.forEach( (s, index) => {
    console.log(s, index)
    allStudentsAge = s.age + allStudentsAge
} )

// Idade media
allStudentsAge = allStudentsAge / students.length
console.log(allStudentsAge.toFixed(0))