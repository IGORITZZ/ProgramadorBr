let jogador = document.querySelector('#jogador')
// aqui capturamos o valor do menor quadrado, o que queremos que se movimente

let xInicial = 0
let yInicial = 0
// aqui as váriaveis dão o valor inicial dos eixos do objeto
function moverJogador(x, y){
// essa função recebe dois parametros que serão interpolados
    let posX = `${x}px`
    let posY = `${y}px`
// o  valor que é interpolado acima, será o valor que irá mudar a posição de top e left
// já que o valor recebido aqui sempre é em formato de string, por isso que interpolamos o resultado das variavéis acima
    jogador.style.top = posX
    jogador.style.left = posY
}

setInterval(function(){
// essa função dita um intervalo para realizar uma incrementação nos paramtros da função moverJogador
// aqui moverJogador está diferente, e o JS entender que são valores que representam x e y, quando colocados em ordem
// sendo assim, aqui o xInixial ira dizer qual o valor do parametro x, já que nessa função ele está recebendo o encremento
// o mesmo vale para yInicial e o parametro y
    moverJogador(xInicial++, yInicial++)
}, 5);