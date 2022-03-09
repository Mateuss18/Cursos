const obj1 = {}
console.log(obj1)


const obj2 = new Object
console.log(obj2)


function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Lapis', 8, 0.2)
console.log(p1.getPrecoComDesconto())


function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('Lucas', 7980, 4)
console.log(f1.getSalario())


const filho = Object.create(null)
filho.nome = 'Luiz'
console.log(filho)


const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)