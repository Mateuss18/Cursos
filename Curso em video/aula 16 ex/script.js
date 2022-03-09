let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function analise(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Bloco em branco ou numero invalido')
    }
    num.value = ''
    num.focus()
} 

function finalizar() {
    let tamanho = valores.length
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = 0
   for(let i=0; i<tamanho; i++){
       soma += valores[i]
   }
   let media = soma/tamanho
   res.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrados </p>`
   res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
   res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
   res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
   res.innerHTML += `<p>A media dos valores é ${media}</p>`
}