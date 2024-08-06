/*
var user = prompt('Please enter a user')
var age = prompt('please enter a age')
var matricula = prompt('')
var curso = prompt('')
console.log('Nome: ' + user + 'Idade: ' + age)
alert('Nome: ' + user + 'Idade: ' + age)
*/
/*
document.write('<h1> Olá ' + user +'</h1>')
document.write('<h1> Idade: '+ age + '</h1>')
*/
/*
document.write('<h1> Olá ${user}! </h1>')
document.write('<img src="https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/A7KFWH5U4BN3BH4KRBGTD2JWEQ.jpg?auth=c159a8f29b29caca727fcd2febaff8dceb71e4392e143e9167f6bd4a3bfa3882&width=300&height=300">')
*/
var greeting = document.getElementById('greeting')
function login(){
    var username = prompt('Enter your username:')
    if (username === '' || username === null) {
        alert('Please enter a username ')
    }else{
        greeting.innerHTML = 'Bem vindo $ {username} ! '
        let logoutBtn = document.createElement('button')
        logoutBtn.innerText = 'Log out'
        greeting.appendChild(logoutBtn)
    }
}

function logout() {
    alert('You have been logged out')
    greeting.innerHTML = 'Ate mais...'
}