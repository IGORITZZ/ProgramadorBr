let dobro = () => {console.log(this)};
let numero = {
    x: 8,
    d: dobro
}
numero.d()
//
let dobro2 = function(){
    console.log(this);
}
let numero2 = {
    x: 8,
    d: dobro2
}
numero2.d()