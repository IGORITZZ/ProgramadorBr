
function dobro(x){
    console.log(2*x);
}
dobro(5)

// ou
let dobro2 = function (x){
    console.log(2*x);
}
dobro2(15)

// ou

function dobro3(x) {
    console.log(2 * x);
}
dobro3(30)
// ou
let dobro4 = x => {
    return(2 * x);
}
console.log(dobro4(40));

// ou
let dobro5 = x => (2*x)
console.log(dobro5(10));
// ou
let dobro6 = x => 2*x
console.log(dobro6(90));

