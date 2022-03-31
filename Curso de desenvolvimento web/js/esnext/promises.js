function falarDepoisDe(falar){
    return new Promise((resolve) => {
        resolve(falar)
    })
}

falarDepoisDe('mim')
    .then(falar => console.log(falar))
    .catch(e => console.log(e))