let url = "https://jsonplaceholder.typicode.com/users/1"

  async function listUser(){
   let req = await axios.get(url)
   //lista.textContent = JSON.stringify(req.data)
   nameUser.textContent = JSON.stringify(req.data.name)
   emailUser.textContent = JSON.stringify(req.data.email)   
  }
  async function detailUser(){
    let req = await axios.get(url)    
    nomeDetal.textContent = JSON.stringify(req.data.name)
    emailDetal.textContent = JSON.stringify(req.data.email)
    telefoneDetal.textContent = JSON.stringify(req.data.phone)
    siteDetal.textContent = JSON.stringify(req.data.website)
    let detals = document.querySelector('.detalhes')
    if (detals.style.display =='none'|| detals.style.display == ''){
      detals.style.display = 'block'
    }else {detals.style.display = 'none'}
  }
  async function addUser(){
    let users = document.querySelector('.newUsers')
    if (users.style.display == 'none' || users.style.display == ''){
      users.style.display = 'block'
    }else {users.style.display = 'none'}
    document.querySelector('.usuarios').classList.add('fundo')
    
  }
  async function gravarUser(){
    fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    phone: document.querySelector('#phone').value,
    website: document.querySelector('#site').value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  document.querySelector('#name').value=''
  document.querySelector('#email').value=''
  document.querySelector('#phone').value=''
  document.querySelector('#site').value=''
  document.querySelector('#name').focus()
  }
  async function cancelUser(){  
    let users = document.querySelector('.newUsers')
    if (users.style.display == 'none' || users.style.display == ''){
      users.style.display = 'block'
    }else {users.style.display = 'none'}  
    document.querySelector('.usuarios').classList.remove('fundo')
  }
  async function deleteUser(){
    let del = await axios.delete(`${url}`)
    alert(JSON.stringify(del.data))
  }