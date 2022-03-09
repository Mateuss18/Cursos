function area(largura, altura){
    const area = largura * altura
    if(area >230){
        console.log(`Valor da area ${area}m2 é acima do permitido tente novamente `)
    }else{
        return area
    }
}

console.log(area(1, 4))