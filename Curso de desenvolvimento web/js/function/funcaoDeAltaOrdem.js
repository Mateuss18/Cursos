// Função forma literal
function soma(){ }

// Armazenar como variavel
const soma2 = function(){}

// Armazenar em um array
const array = [function(a, b) {return a + b}, soma, som2]
console.log(array[0](1, 9))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar uma função como parametro
function corra(fun){
    fun()
}

corra(function() {console.log('Executando...')})

//Uma função que pode retornar uma função
function subtrair(x, y){
    return function(z){
        console.log(a - b - c)
    }
}

subtrair(9, 1)(3)