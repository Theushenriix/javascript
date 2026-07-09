function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML =  `Agora são ${hora} horas.`

    hora = 11
    
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = "#ffdc30"
    } else if (hora >= 12 && hora  <= 18) {
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = "#af3f64"
    } else {
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = "#1d1c27"
    }

}

