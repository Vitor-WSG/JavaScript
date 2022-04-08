//Consumo de API com Fetch
const url='https://jsonplaceholder.typicode.com/posts'

//Retorna todos os usuarios
function GETusers(){
    fetch(url)
    .then(response=>response.json())
    //convertendo o conteudo para texto simples e jogando no HTML com o textContent
    .then(data=> APIresult.textContent= JSON.stringify(data))
    .catch(erro=>console.error(erro))
}

//Retorna apenas 1 usuario
function GETuser(){
    fetch(`${url}/1`)
    .then(response=>response.json())
    .then(data=> {
        Id.textContent= "ID:"+JSON.stringify(data.id)
        title.textContent= "TITLE:"+JSON.stringify(data.title)
        body.textContent= "BODY:"+JSON.stringify(data.body)
        //imagem.src = link da imagem        
    })
    .catch(erro=>console.error(erro))
}

//Usando o Metodo POST para criar novo usuario
const newUser ={
    title:'foo',
    body:'bar',
    userId:1
}
function addUser(){
    fetch(url,{
        method: "POST",
        body: JSON.stringify(newUser), //Transformando em texto comum
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }    
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(erro=>console.error(erro))
}


//Usando o metodo PUT para atualizar um usuario
const newUser2 ={
    title:'novo titulo',
    body:'novo body',
    userId:2
}
function updateUser(){
    fetch(`${url}/1`,{
        method:"PUT",
        body: JSON.stringify(newUser2),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(erro=>console.error(erro))
}


//Usando o metodo delete para deletar usuario
function deleteUser(){
    fetch(`${url}/1`,{
        method:"DELETE"
    })    
}