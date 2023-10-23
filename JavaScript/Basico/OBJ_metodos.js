function calcmedia (n1,n2){
    return(n1 * 2 + n2)/3
}
// vamos atribuir uma função para ajudar no calculo das medias dos nosso objetos
var aluno1 ={
    nome: 'igor',
    notas: [7, 8],
    media: calcmedia
}
var aluno2 = {
    nome: 'jão',
    notas: [8, 5],
    media: calcmedia
}
//com a função pronta já podemos realizar os calulos sem problemas
// já que a função pode ser nomeada como uma propriedade
console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))
// se fosse como qualquer coutra função após media() retornaria o resultado, mas não é o caso
console.log(aluno2.nome)
console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]))
// para que não escrevamos o código tão comprido assim, existe outro modo de realizar essa tarefa
function calcMedia (n1, n2){
    return (this.notas[0] + this.notas[1]) /2
}
// nesse contexto ultilizamos this, que serve para dizer para a função oque é aquele valor
// sendo possivel ser usado somente com objetos e não possivel com outras situações
var aluno3 = {
    nome: 'maria',
    notas: [8,9], 
    media: calcMedia
}
var aluno4 = {
    nome: 'joana',
    notas: [7,9],
    media: calcMedia
}

console.log(aluno3.nome)
console.log(aluno3.media())
console.log(aluno4.nome)
console.log(aluno4.media())
// e quadno usamos this dizemos a função quais os valores, sendo assim o codigo de impressãoo fica menor
