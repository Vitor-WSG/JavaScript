function adiBola() {
    var box = document.getElementsByClassName('bola');
    var background = ["#f36", "#C3C", "#fc0", "#FC6", "#9C0", "#363636", "#000", "#000080", "#006400", "#8B4513", "#4B0082"];
    cor = 0;
    div = 0;
    setInterval(function() {
        box.item(div).style.backgroundColor = background[cor];
        cor++;
        div++;
        if (cor >= background.length) {
            cor = 0;
        }
        if (div >= box.length) {
            div = 0;
        }
    }, 1000)

    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    bola.setAttribute("style", "left:" + p1 + "px;top:" + p2 + "px;");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
}
function estourar(elemento) {
    document.body.removeChild(elemento)
}
function iniciar() {
    setInterval(adiBola, 1000)
}