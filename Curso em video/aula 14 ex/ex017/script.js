function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tab')

    if (num.value.length == 0){
        window.alert('Por favor digite um numero')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(let c=1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
/*      var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
*/        }
    }
