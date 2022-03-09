function contar() {
    let pass = document.getElementById('pass')
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let res = document.getElementById('res')

    if(ini.value == 0 || fim.value == 0 || pass.value == 0 ){
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Verifique se você preencheu todos os dados')
    } else {
        res.innerHTML = 'Contado: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value) 
        if(p <= 0){
            window.alert('Passo invalido Contando a partir do PASSO 1')
            p=1
        }
        if(i < f){
            //Contagem Crescente
            for(var c=i; c<=f; c +=p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }else{
            //Contagem Regressiva
            for(var c=i; c>=f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

