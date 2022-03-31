function carregar(){
    var msg=document.querySelector("#msg")
    var img=document.querySelector("#imagem")
    var data=new Date()
    var hora= data.getHours().getMinuts()
    
    if (hora >= 8 && hora <= 12){
        msg.innerHTML="Bom dia"
        scr
    }  
    else if (hora > 12 && hora <=18){
        msg.innerHTML="BOa tarde"
    } 
}   else {
        msg.innerHTML="Boa noite"
}