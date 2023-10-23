function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2)/2
        }
    }
}
// Essas duas funções criadas servem para simplicficar, e não forçar o uso de mais um varivael
// Então seria uma função com uma declaração, que fica entra parenteses
// Sendo assim, valores atribuidos no Arrey, são valores que a função declara
var turma = [
    criarAluno('IGOR', 9, 7.5),
    criarAluno('JOÃO', 9, 3)
// Quando eu declarei que a função ia receber um argumento NOME, N1, N2
// Agiliza assim na contrução do código, aonde eu preciso somente por os valores da função, e ela mesmo vai concluir a operação daquela função
]
var aluno = turma[1]
console.log(aluno)
console.log(aluno.media())

turma.forEach(function(elemento){
    console.log(elemento)
})
// Esse forEach serve para que imprima tudo que está no Arrey e não um elemento por vez.
for (var aluno of turma){
    console.log(aluno.nome + ' - ' + aluno.media())
// Essa é a maneira mais simples para usar o FOR para imprimir os elementos
// var aluno of turma, para turma cada elemento vai para aluno
// Assim todo aluno.nome vai ser impresso, ou aluno.media()
}

function aluno4(nome, n1, n2){
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function (){
        return (this.nota1 + this.nota2)/2
    }
}

var a = new aluno4('IGOR', 5, 2)
console.log(a)
console.log(a.nome)
