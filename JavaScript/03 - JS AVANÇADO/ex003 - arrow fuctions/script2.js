
let dobro = () => 2 * this.x
let numero = {
    x: 8,
    d: dobro
}
console.log(numero.d())
//
let dobro2 = function(){
    return 2 * this.x;
}
let numero2 = {
    x: 8,
    d: dobro2
}
console.log(numero2.d())