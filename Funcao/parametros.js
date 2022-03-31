function defaultParams(a,b,c){
    console.log(a,b,c)
}
defaultParams(1,2,3) /* Retorna valores informados */
defaultParams (1) /* Como não foi informado os valores de b, c retornara undefined */

//

function defaultParams2(a=0,b=0,c=0){ /* Neste caso eu defino um valor quando os mesmos não forem informados */
    console.log(a,b,c)
} 
 defaultParams2(5,)
