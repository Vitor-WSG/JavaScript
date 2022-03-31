/* função anonima */
const incremento1= function (n) { 
    return n+1
}
console.log(incremento1(99))


/* Arrow function */
/* Quando se tem apenas um parâmetro pode-se tirar o parenteses, par de chaves, e return do parâmetro */
const incremento2= n =>  n+1
console.log(incremento2(199))

/* Arrow function */
/* Quando há dois parâmetros precisamos do uso de parênteses */
const soma = (a,b) => a+b
console.log(soma(6,9))