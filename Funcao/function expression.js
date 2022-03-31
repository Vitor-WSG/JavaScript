//Função anonima (sem nome)
/* Precisa ser envolvida em parenteses */
(function (a,b,c){
    return a+b+c
})

//Function expression
/* Nesse caso a variável recebe uma função como valor */
const sum = function (a,b,c){ /* const sum = recebe a função */
    return a+b+c
}
const resultado = sum(8,76,9) /* const resultado =  recebe o resultado da função */
console.log(resultado)

const resultado2 = sum(1,2,3)
console.log(resultado2)

const resultado3 = sum
console.log(resultado3(2,5,4)) /* Tambem posso passar os valores na chamada do console */