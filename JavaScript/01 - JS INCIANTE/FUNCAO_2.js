function saudacao (){
    return 'ola mundo'
}

var s = saudacao()
/* nesse caso, vamos transformar a função em um valor de váriavel, simplismente declarando 
var s = saudacao. sem os (), sendo os parenteses responsáveis por declarar que a função rertona,
e assim declara valor, agora var s declara oque ta na função */
console.log(s)

function media (n1, n2){
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2) / 2
    return media
}

var resultado1 = media(5, 5)
var m = media
var resultado2 = m(5, 5)
/* como o explicado a cima, aqui a variavel m virou uma função, já que recebe o valor da função */


console.log(resultado1);
console.log(resultado2);

var media = function (n1, n2){

    return(n1 + n2 ) / 2
}
console.log(media(5, 9))
/* Um resumo de como declarar função, declara como um valor que uma varaivel recebe.
e de forma simplicada no return fazemos a operção, e no console declaramos o valor*/

var media = (n1, n2) => {

    return(n1 + n2 ) / 2
}
console.log(media(5, 9))
/* Outra forma de declarar uma função é com Arrow Function, não muito utilizada,
mas é outra forma de declarar uma função*/