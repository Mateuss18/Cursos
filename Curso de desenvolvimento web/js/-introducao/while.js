function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -5){
    opcao = getInteiroAleatorioEntre(-5, 5)
    console.log(`Valor ${opcao} encontrado`)
}

console.log('Fim')