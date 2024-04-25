let tela = document.getElementById("tela")
//Esse exemplo não funciona com querrySelector()
let context = tela.getContext("2d")
context.moveTo(0, 0)
context.lineTo(250, 250)
context.lineTo(500, 0)
context.strokeStyle = "#FF0000"
context.lineWidth = 1
context.stroke()
