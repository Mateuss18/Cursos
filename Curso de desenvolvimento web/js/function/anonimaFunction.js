const somar = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = somar){
    console.log(operacao(a, b))
}

imprimirResultado(7, 2)
imprimirResultado(7, 2, somar)

