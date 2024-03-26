let lista = document.querySelector('#lista')

lista.dataset.num = 15
// além de pegar o valor do atributo, podemos também definir esse valor
let num = parseInt(lista.dataset.num)
// quando mudamos o atributo dataset, conseguimos extrarir o valor em num, graças ao data- no nome do atributo
// parseInt() tranforma o valor em numero inteiro

let conteudo = ''

for (let i = 0; i <= num; i++){
    // se i for menor que a váriavel num, i recebe um incremento (mais 1 no seu valor)
    conteudo += `<li>${i}</li>`
}


lista.innerHTML = conteudo
