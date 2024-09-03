/*
var lista = ['victor', 'thaius', 'sabrina', 'matheus', 150]
// push() - 
// unshift() - 
// pop() - 
// shift() - 
// join() - 
// toString() - 

var homens = ['homen1', 'homen2', 'homen3', 'homen4']
var mulheres = ['mulheres1','mulheres2', 'mulheres3', 'mulheres4']
//homens.concat - 


var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
var i = 0

while (i <= month.length) {
    document.write(`<p>${month[i]}</p>`)
}

for (var i = 0; i < month.length; i++) {
    document.write(`<p>${month[i]}</p>`)
     
}
*/
function escolher() {
    let options = Number(prompt('Digite a opção desejada'))

    switch (options) {
        case 1:
            alert('Voce escolheu a opção 1')
            break
        
        case 2:
            alert('Voce escolheu a opção 2')
            break

        case 3:
            alert('Voce escolheu a opção 3')
            break

        case 4:
            alert('Voce escolheu a opção 4')
            break

        default:
            alert('Opção invalida')
            break;
    }
}

//crie um programa que calcula o imc do usuario 
//o usuario deve colocar os dados

//crie uma funcao que leia a temperatura do usuario e no fianl pergunte para qual converter ex:C para F

//Um programa que gere numeros aleatorios para o usuario