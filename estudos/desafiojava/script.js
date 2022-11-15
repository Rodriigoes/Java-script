function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagensatt/amanhecer.png'
        document.body.style.background = '#B4A9A3'
    } else if (hora >= 12 && hora <18) {
        img.src = 'imagensatt/tarde.png'
        document.body.style.background = '#F1D798'
        //BOA TARDE
    } else { 
        img.src = 'imagensatt/noite.png'
        document.body.style.background = '#010D1F'
        // BOA NOITE
    }
}