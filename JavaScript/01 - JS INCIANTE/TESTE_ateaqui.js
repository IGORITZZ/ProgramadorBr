var nomes = ['IGOR', 'JOSE', 'AMANDA']
var nota1 = [7.0, 8.7, 4.9]
var nota2 = [8.9, 7.0, 9.8]
// declarando as variaveis na forma de Arrey
function media(n1, n2){
    return(n1 + n2) / 2
}
//funtion para fazer o calculo da média
function passou(media){
    var resultado = 'reprovado'
    if(media >= 7){
        resultado = 'aprovado'
    }
    return resultado
}
// função fução para apresentar resultado levando em si o resultado da função media
for(var index in nomes){
// um fora para retirar o elemento nome do index
    var notas1 = nota1[index]
    var notas2 = nota2[index]
// notas1 e notas2, cada valor de nota1 no index, sera o valor de notas1
//salvando as variaveis 'index' para ficar um código mais legivel
    var m = media(notas1, notas2)
//salvando o valor da variavel media, para tornar o código mais legivel
    console.log(
        nomes[index] + 
        ' ' + 
        notas1 + 
        ' ' +
        notas2 +
        ' ' +
        m +
        ' ' +
        passou(m)
    )
}
