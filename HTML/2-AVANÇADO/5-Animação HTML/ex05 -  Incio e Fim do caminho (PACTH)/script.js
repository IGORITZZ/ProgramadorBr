let tela = document.getElementById("tela")
let context = tela.getContext('2d')

context.beginPath()
// indica o inicio da linha ou "animação"

context.lineWidth = 4
// espessura da linha
context.strokeStyle = "blue"
// cor da linha
context.moveTo(40,40)
// posição inicial X e Y
context.lineTo(250,300)
// posição "final" X e Y
context.stroke()
// comando faz com que a linha seja "criada", ou mostrada na tela

context.beginPath()
// se for para criar uma nova linha, precisamos declarar novamente beginPath(), ou os comandos "stroke" irão se sobreescrever
context.lineWidth = 4
context.fillStyle = "white"
// cor da parte interior do objeto criado
context.strokeStyle = "red"
context.moveTo(25,10)
context.lineTo(100,150)
context.lineTo(150,50)
// esse segundo comando "lineTo" faz com que a linha siga oura direção mesmo já tento uma posição incial criada
context.closePath()
// esse comando faz com que a linha se conecte com do final ao inici, fechando um "ciricuido", e no exemplo criado resultou em um triangulo
context.fill()
// aqui podemos vizualizar oque criamos com "fillStyle", e a forma criada ficaria com uma cor de preenchimento
context.stroke()

// importande dizer que as posições final de "stroke" ou "fill" alteram o resulado, pelo menos em sua vizulização apenas
