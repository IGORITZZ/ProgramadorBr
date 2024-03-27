var audio = document.querySelector('#audio1')
function aumentarVel(){
    audio.playbackRate += 0.1
}
function avancar(){
    audio.currentTime += 10
}
function play(){
    audio.play()
}
function stop(){
    audio.pause()
    audio.currentTime = 0
}
function diminuirVel(){
    audio.playbackRate -= 0.1
}
function voltar(){
    audio.currentTime -= 10
}
