let video = document.getElementById("video1")

function retroceder(){
    video.currentTime -= 10
}

function diminiurVel(){
    video.playbackRate -= 0.1
}
function play(){
    video.play()
}
function stop(){
    video.pause()
    video.currentTime = 0
}
function aumentarVel(){
    video.playbackRate += 0.1
}
function avancar(){
    video.currentTime += 10
}
