function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.lenght == 0 || Number(fano.value) > ano || Number(fano.value) == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 1 && idade < 14){
                //Criança
                img.setAttribute('src', 'criançahomem.jpg')
            } else if (idade < 24){
                //Jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultohomem.jpg')
            } else if (idade < 120){
                //Velho
                img.setAttribute('src', 'velhohomem.jpg')
            } else {
                //Morto
                img.setAttribute('src', 'morto.jpg')
            }
        }
        else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 1 && idade < 14){
                //Criança
                img.setAttribute('src', 'criançamulher.jpg')
            } else if (idade < 24){
                //Jovem
                img.setAttribute('src', 'jovemulher.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultomulher.jpg')
            } else if (idade < 120){
                //Velho
                img.setAttribute('src', 'velhomulher.jpg')
            } else {
                //Morto
                img.setAttribute('src', 'morto.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}