const numeros = [1, 2, 3, 4, 5]

// For com proposito
let resultado = numeros.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
resultado = numeros.map(soma10)
console.log(resultado)