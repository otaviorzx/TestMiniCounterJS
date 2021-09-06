const numres = document.querySelector('div#numerocontado')

function contar(){
    var numcont = document.getElementById('numerocontar')
    var nummin = document.getElementById('nummin')

    let numont = Number(numcont.value)
    let numin = Number(nummin.value)
    numres.innerHTML = ''

    if (numin == 0 || numont == 0){
        window.alert('Por favor, adicione um número!')
    } else{
        if (numin > numont){
            for(let c = numin; c >= numont ; c--){
                numres.innerHTML += `${c}<br>`
            }
        } else{
            for(let c = numin; c <= numont ; c++){
            numres.innerHTML += `${c}<br>`
            }
        }
}

}

function manual(){
    var manual = document.querySelector('p#manual')
    manual.innerHTML = 'Para utilizar esse site, basta colocar o valor de até qual número você quer que o contador vá, quando colocado, clique em "contar", coloque o número que o contador inicializará, caso queira pausar o contador, clique em "pausar". <br>Feito por:'
}