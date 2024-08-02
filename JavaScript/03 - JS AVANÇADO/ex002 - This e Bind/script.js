function speakGeneric(){
    console.log(this.soun);
}

let dog = {
    soun: "au au",
    speak: speakGeneric
}

let cat = {
    soun: "miau miau",
    speak: speakGeneric
}
dog.speak()
cat.speak()

let bindedFunction = speakGeneric.bind(dog)
bindedFunction()