function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dado e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if ( idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebeM.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemM.png')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoM.png')
            } else {
                img.setAttribute('src', 'idosoM.png')
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebeF.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemF.png')
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'adultoF.png')
            } else {
                img.setAttribute('src', 'idosoF.png')
                //idoso
            }
        }
        res.innerHTML = `Decetctamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}