//Consumo de API com Axios com async await

 const url='https://jsonplaceholder.typicode.com/posts'
async function GETUsers(){
    const req = await axios.get(url)
    const res = await req.data
    apiresult.textContent= JSON.stringify(req.data)
}

async function GETUser(){
    let user=document.getElementById("usuario").value
    const req = await axios.get(`${url}/${user}`)
    id.textContent= "ID:"+JSON.stringify(req.data.id)
    title.textContent = "TITLE:"+JSON.stringify(req.data.title)
    body.textContent = "BODY:"+JSON.stringify(req.data.body)
}

async function POSTUser(){
    const req = await axios.post(url,newuser)
    const res = req.data
    console.log(res)
}
const newuser = {
    title:"title atualizado",
    body:"body atualizado",
    userId:300
}

