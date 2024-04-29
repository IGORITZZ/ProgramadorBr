let tel = document.getElementById("tela")

let context = tela.getContext('2d')

context.rect(10, 10, 100, 200)
// reac se cria uma area aonde podemos criar um elemento
// dentro de reac é (X, Y, ALTURA, LARGURA)
context.fillStyle = 'blue'
// fillStyle dar cor apenas dentro do elemento criado
//context.fillRect(10, 10, 100, 200), outra forma de criar
context.lineWidth = 2
// aumentando a espessura da linha criada em stroke
context.strokeStyle = 'red'
// aqui mudamos a cor da linha criada 
//context.strokeRect(10, 10, 100, 200)

// importante dizer que quando cruamos usando fillRect ou strokeRect somente um dos dois elementos vão aparecer em tela

context.fill()
context.stroke()
// quando criamos com rect, precisamos executar um comando para que os dois elementos apareçam em tela
context.clearRect(20,20,30,30)
// uma maneira de cortar o elemento criar, mas como se fosse um pequeno recorte