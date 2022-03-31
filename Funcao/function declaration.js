/* FUNCTION DECLARATION */

function sayHello(){ /* funçao SEM parâmetro de entrada, SEM retorno */
    console.log("Hello")
}
sayHello() /* Executando a funcao */

//

function sayHelloTo(name){ /* função com parametro de entrada 'name', SEM retorno */
    console.log(`Hello ${name}!`)
}
sayHelloTo('Joao')

//

function returnHi(){/* Função sem parâmetro de entrada COM retorno de valor*/
    return 'Hi'
}
const greeting = returnHi()
console.log(greeting)

//

function returnHito(name){ /* Funcão COM parametro de entrada e COM retorno de valor */
    return `Hi ${name} !`
}
console.log(returnHito('Maria'))