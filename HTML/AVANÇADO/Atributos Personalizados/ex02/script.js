let lista = document.querySelector('#lista')
let num = parseInt(lista.getAttribute('num'))
// parseInt() tranforma o valor em numero inteiro

let conteudo = ''

for (let i = 0; i <= num; i++){
    // se i for menor que a váriavel num, i recebe um incremento (mais 1 no seu valor)
    conteudo += `<li>${i}</li>`
}


lista.innerHTML = conteudo
