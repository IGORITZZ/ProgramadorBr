let tela = document.getElementById("tela")
//Esse exemplo não funciona com querrySelector()
let context = tela.getContext("2d")
context.moveTo(0, 0)
context.lineTo(250, 250)
context.lineTo(500, 0)
// lineTo(X, Y) cria uma linha em tela, com base nas posições dos eixos X e Y
context.strokeStyle = "#FF0000"
// conseguimos adicionar cor a nossa linha, porém o valor tem que ser entre aspas
context.lineWidth = 1
// coseguimos alterar a espeçura da linha
context.stroke()
// stroke faz com que a nossa linha seja apresentada na tela
// sempre tem que ser ao final, pois pode dar erro ou até mesmo não mostrar nada em tela