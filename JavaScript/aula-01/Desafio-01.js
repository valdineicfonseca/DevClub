/*
01 - Faça programa que some 2 numeros
02 - Faça programa que multiplique 2 numeros e o resultado adicione 10
03 - Faça programa encontre a raiz quadrada, multiplique por 10 e divida por 33
04 - Faça programa que inicie com dois nomes e o programa imprima na tela o seguinte
dado: Olá meu nome é (nome1) e partner do CodeClub é (nome2)
05 - Faça um  programa que imprima na tela se um nome é igual ao outro nome digitado ex:
joao e joao  imprime false. Joao e Maria imprime true.

06 - Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém,
os dois nomes devem estar em um  Array. Ex: const array = ['Joao','Maria']. Joao e Joao, Imprime false.
,Joao e Maria imprime true.

07 - Faça um programa que imprima na tela se um nome é igual ao outro digitado. Porém, os dois nomes
devem estar em dois objetos separados. Ex: const object1 = {name:"Joao"}, object1 = {name:"Maria"}. Joao e Joao, imprime
true, Joao e Maria imprime false.Faça o mesmo colocando os dois nomes em um objeto ex: object1 = {firstName:"Joao", seccondName:"Maria"}

08 - Faça um programa onde toda vez que ele rodar, coloca na tela um numero aletorio entre 1 e 100.
09 - Faça um programa onde colocamos dois numeros impares e o programa imprima o resto da divisão. 
Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: O Fala um programa onde entramos  com dois números. e ele 
imprime se o primeiro é maior que segundo. Ex: 2 e 5 imprime false. Faça um programa onde entramos com dois numeros e ele
imprime se primeiro é menor que segundo. Ex: 2 e 5 imprime true.

10 - Crie um programa que mostra o tamanho do Array. Ex: const array = [0,1]  imprime 2. const array = ["banana","Maça","Laranja"]
imprime: 3.

*/

//Ex 01:
let n1 =10
let n2 =20
let soma=n1+n2
console.log("Ex 01: Soma de n1 + n2: " + soma)

//Ex 02:
let n3 =2
let n4 =4
let multplicarSomar=n3*n4+10
console.log("Ex 02: Soma de n3 + n4: " + multplicarSomar)

//Ex 03:
let raiz = Math.sqrt(25,2)
let vezes10= raiz * 10
let divid33= vezes10 / 33
console.log("Ex 03: raiz de 25 : " + raiz)
console.log("Multiplicado por 10 : " + vezes10)
console.log("Dividido por 33 : " + divid33)

//Ex 04:
let nome1 = "Valdinei"
let nomePather =  "Val C. Fonseca"
let frase = `Ex 04: Olá meu nome é ${nome1} e partner do CodeClub é ${nomePather}`
console.log(frase)

//Ex 05:
let name1 = "Joao"
let name2 = "Maria"
console.log("Ex 05:")
console.log(name1 !== name2)
console.log(name1 !== name1)

//Ex 06:
const array = ["Joao","Maria"]
console.log("Ex 06:")
console.log(array[0] +","+array[0])
console.log(array[0] !== array[0])
console.log(array[0] +","+array[1])
console.log(array[0] !== array[1])

//Ex 07:
const obj1 = {name:"Joao"}
const obj2 = {name:"Maria"}
const objSeries = [{name:"Joao"}, {name:"Maria"}]

console.log("Ex 07:")
console.log(obj1.name +","+ obj2.name)
console.log(obj1.name == obj2.name)
console.log(obj1.name +","+ obj1.name)
console.log(obj1.name == obj1.name)

console.log(objSeries[0].name +","+ objSeries[1].name)
console.log(objSeries[0].name == objSeries[1].name)

//Ex 08:
let random = Math.floor(Math.random() * 100 + 1) // Retira o ponto multiplica por ate 100 + 1 para evitar o 0.
console.log("Ex 08: 0 a 100: " + random)

//Ex 09:
let div1 = 7
let div2 = 3
let resto = div1 % div2
console.log("Ex 09:")
console.log(" Resto de 7 / 3 :" + resto)

console.log("Primeiro é maior que o segundo:")
console.log(div1 > div2)

console.log("Primeiro é menor que o segundo:")
console.log(div1 < div2)

// Ex 10:

array01 = [1,2,3]
array02 = ["Banana","Maça","Pera"]

console.log("Ex 10: Array01: " + array01.length)
console.log("Array02: " + array02.length)