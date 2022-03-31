for (let letra of "Javascript"){
    console.log(letra)
}

const topicos = ['Map', 'Set', 'Promise']

for(let i in topicos){
    console.log(i)
}

for(let topico of topicos){
    console.log(topico)
}

const topicosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for(let chaves of topicosMap.keys()){
    console.log(chaves)
}

for(let valor of topicosMap.values()){
    console.log(valor)
}
for(let [ch, vl] of topicosMap.entries()){
    console.log(ch, vl)
}