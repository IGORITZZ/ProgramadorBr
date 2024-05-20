let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')


// tranformamos todas as informações que eram variáveis em um objeto
let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0
    // uma ultima informação seria a rotação da animação que seria true ou false que mudariam o sentido da rotação do nosso objeto
}

function drawCircle(c) {
    ctx.beginPath()
    ctx.rect(0,0, 500,500)
    ctx.fillStyle = 'beige'
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'blue'
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.fill()
    ctx.stroke()

}

setInterval(() => {
    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.3
        circle.x += 3
    }

    drawCircle(circle)
}, 150);


