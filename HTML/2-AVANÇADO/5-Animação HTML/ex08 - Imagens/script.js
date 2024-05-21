let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let img = new Image()
img.src = "imagem/red.jpg"
// para realizar a insersção para uma imagem por JS vamos usar "new Image()"
// e adciona-la usando o atributo src
img.onload = carregarImagem()
// ja o evento onload irá carregar a imagem inserida por meio de uma função
function carregarImagem(){
    ctx.drawImage(this, 20, 20, 250, 250)
// ctx.drawImage(this, 20, 20, 250, 250), vamos ler da seguinte forma
// ctx.drawImage irá desenhar a imagem na tela
// this ou img (variável) indica oque irá ser desenhado
// (distancia margem, distancia margem, width, height)
// mas podemos colocar da seguinte maneira (this, 20, 20, this.naturalWidth / 2, this.natualHeight / 2)
//naturalWidth ou natualHeight refere ao tamanho natural da imagem, e vamos dividir por 2 
}


// outra maneira seria colocar a imagem por maio de tag em cósigo HTML e informar na variável por meio de um id, let img = document.getElementById('red')
// e repetindo o processo ctx.drawImage(img, 20, 20, 250, 250), nesse caso não podemos usar this (this só é usando dentro de funções)




