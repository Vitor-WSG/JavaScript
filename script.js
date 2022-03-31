/* Metodo Window
alert("Ola mundo")
confirm("deseja continuar?")
prompt("ola visitante\nInforme a data do seu nascimento","dd/mm/aaa")
*/

function AlteraTexto(){ //Função SEM PARAMETROS
    var area=document.getElementById('area')
    var texto=prompt('Qual seu nome - função')
    area.innerHTML = texto
}

function AlteraTextoParametros(nome,idade){ //Função COM PARAMETROS
    var area=document.getElementById('area2')
    var texto=prompt('Qual seu sobrenome')
    area2.innerHTML = nome+" "+texto+" tem "+idade;
}