/*function imprimir() {
    document.write()
}

setInterval(imprimir, 1000)

setInterval(() => (
    document.write('<p>counter</p>')
), 1000)

let counter = document.getElementById('contador')

var myTimer = setInterval(() => {
    counter.innerHTML += 'Hello </br>'
}, 1000)

function stopTimer() {
    clearInterval(myTimer)
}

setTimeout(imprimir, 4000)

setTimeout(() => {}, 4000)


var nome = 'Victor'

if (nome === Victor) {
    var profissao = 'professor'
    console.log(profissao)
}

if (nome === Victor) {
    let cargo = 'CEO'
    console.log(cargo)
}

if (nome === Victor) {
    const cargos = 'CEOs'
    cargo += 'professor'
    console.log(cargos)
}

const sobrenome = 'sobrenome'
*/

let pessoa = {
    nome: 'Arthur',
    idade: 21,
    cargo: CEO,
}
/*
let usuarios = [
    {nome: 'Sua', idade:'50', cargo:'Dev'}
    {nome: 'Mae', idade:'50', cargo:'CEO'}
    {nome: 'Pelada', idade:'50', cargo:'Web Dev'}
]

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome)
}


let{ nome, idade, cargo } = pessoa

console.log(nome)
console.log(idade)
console.log(cargo)

let pares = [2, 4, 6, 8, 10]
let impares = [...pares, 3, 5, 7, 9]

let pessoa = {
    name: 'bob',
    age: 23, 
    status: 'single'
}

let pessoaProf = {
    ...pessoa, 
    profession: 'CEO',
    salary: '15000',
}


function user(info) {
    let newUser = {
        ...info
        profession: 'CEO',
    }
    console.log(newUser)
}

user({nome: 'bob', age: 34})

function alunos(...nomes) {
    console.log(nomes)
}

alunos('Victor', 'Sabrina', 'Matheus')
*/

let nomes = ['Victor', 'Sabrina', 'Matheus', 'Eduardo']

nomes.map((item, index) => (
    console.log(`${index} - ${item}`)
))