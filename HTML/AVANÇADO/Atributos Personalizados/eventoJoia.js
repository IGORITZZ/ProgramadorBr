let img = document.getElementById('dedo')
img.addEventListener('click', function (){

    // img.src = './imagens/joia.png'
    let ultimaimagem = img.getAttribute('src')
    img.setAttribute('src', 'imagens/joia.png')

    console.log(ultimaimagem);
})