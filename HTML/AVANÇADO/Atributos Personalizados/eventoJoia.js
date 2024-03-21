let img = document.getElementById('dedo')
img.addEventListener('click', function (){

    // img.src = './imagens/joia.png'
    let ultimaimagem = img.getAttribute('src')
    img.setAttribute('src', 'imagens/joia.png')

    console.log(ultimaimagem);
})


// esse código é usando para quando criamos um elemento html sem colocar o evento DOM no html, etnçao criamos no JavaScript
// os campos comentados vão simular como ficaria o código dessa outra forma 
/* 
function trocarImagem(){
    let img = document.getElementById('dedo')
    img.src = 'imagens/joia.png'

    let ultimaimagem = img.getAttribute('src')
    console.log(ultimaimagem);
}
*/