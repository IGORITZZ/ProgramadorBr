let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let x = 250
// distancia lateral
let y = 250
// distancia da parte de cima
let raio = 100
// raio do circulo
let inicio = 0
let fim = 2 * Math.PI
// aqui é a pegadinha, sempre a unidade de medida para completar a vonta do circulo é em graus, e para isso é medido em PI, e sendo assim 2 * Math.PI nos da o resultado de uma volta completa

ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.fillStyle = 'blue'
ctx.arc(x, y, raio, inicio, fim)
ctx.fill()
ctx.stroke()
