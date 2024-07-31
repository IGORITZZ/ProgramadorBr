// maneiras de se cruar ibjetos
var a = {
    nome: 'IGOR',
    sobrenome: 'THEODORO'
}
// declarando ele como uma váriavel, e suas propriedas entre {''}, separadas por virgula
function obj (nome, sobrenome){
    return{
        nome: nome,
        saobrenome: sobrenome
    }
}
var aa = obj('igor', 'theodoro')
// Outra forma é cruando uma função e declarando um argumento que ira retornar com valor
// Defenindo o retorno como valor de argumentos, vamos abrir uma variavel para que o argumento da função receba algum valor
function objs(n,s){
    this.nome = n
    this.sobrenome = s

}
var aaa = new objs('Igor', 'Theodoro')
// Da mesma forma que na anterior, o que muda é que a função não rernada nada, pois this age como uma variavel
// Mas para this receber valor a variavel tem que receber new + nome da função, nesse caso new objs
console.log(a)
console.log(aa)
console.log(aaa)
console.log(aaa['nome'])
// Unica coisa que não muda é o metodo para impressão em tela 
