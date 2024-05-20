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

//função para validar os valores de circle
function drawCircle(c) {
    //o retangulo para de ser criado em css e começa a ser criado aqui para não bugar o resultado
    ctx.beginPath()
    ctx.rect(0,0, 500,500)
    ctx.fillStyle = 'beige'
    ctx.fill()
    // novamente criamos o circulo
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.fillStyle = 'blue'
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.fill()
    ctx.stroke()

}
// setInterval define um intervalo de ação entre a condição insposta dentro dela 
setInterval(() => {
    if(circle.fim < 2 * Math.PI){
        //se a posição final do circulo for menor que o fechamento dele (valor definido por 2 * Math.PI)
        circle.fim += 0.3
        // a posição final ira aumentar 0.3, ou seja, fará com que o circulo seja desenhado de maneira devagar
        circle.x += 3
        // a posição x ira movimentar o ciruculo até que o formato esteja completo
    }

    drawCircle(circle)
    // terminando a condição eu chamo a funcção drawCircle que leva o argumento circle, diferente do definido na funcção em sim. 
    // o argumento muda aqui para que a função possa ser simplificada somente com "c"
    // e por ultimo a velocidade do intervalo é de 150ms, definidos no ao final de tudo 
}, 150);


