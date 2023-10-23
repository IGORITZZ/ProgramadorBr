var alunos = { 
    nome:'igor', 
    nota1:7.5 }
// estrutura de construção parece com Arrey, mas agora com {}
// no Arrey conseguimos acessar o elemento pelo index, 
// quando criamos obejtos vamos criar uma especie de chave para acessar uma propriedade
// sendo sempre uma chave e um valor. NOME (chave) 'igor'(valor) NOTA1 (chave) 7.5 (valor)
console.log(alunos.nome)
// para informar o valor na tela, chamos o objeto + chave, ALUNOS(objeto).NOME(chave)
// assim vamos ver na tela impresso o nome 'igor
console.log(alunos['nome'])
// podemos também imprim como index, poém dentro de [], vamos colocar a chave entre ""
// alunos['nome'], tera impresso valor correspondente
// dentro do objeto as propriedades como nome e nota1, funcionam como varoiaveis
// com a unica diferença que no objeto ela se torna uma propriedades
// já que sabemos que seria uma variavel, então sabemos que vai aceitar qualquer valor que uma variavel aceita
// podendo essa propropriedade tambéms ser um Array
var alunos2 = {
    nome: 'igors',
    nota2: [7.8, 9.5]
}
// formas diferentes para imprimir informações e mudar propriedades
console.log(alunos2.nota2[0])
// de forma simoples e como cahmar um index dentro de []
console.log(alunos2['nota2'][0])
// um pouco mais complicado, valor dentro de [''] e em seguida o index dentro de outra []
console.log(alunos2)
// imprimos o novo objeto na tela para enxer todas as propriedades
alunos.matricula = 123456
// objeto alunos vai chamar uma nova propriedade com valor a ser adicionado
// quando imprimimos o objeto vimos a nova propriendade
var novaPro = 'Sobrenome'
alunos[novaPro] = 'oliveira'
// de forma mais fácil, criamos uma variavel e adiconamos ela ao objeto
alunos['sobrenome'] = 'Oliveira'
// mais simplificado em forma de Arrey, danos o nome da propriedade e o valor qu ela recebe
console.log(alunos)
// imprimimos em tela para comparar e confirmar os valores.

// outra forma de criar um objeto seria 
var aluno = new Object({
    sobrenome: 'Marianis',
    Sexo: 'M'
})
// seria uma outra forma dew criar um objeto, mas não tão simplificada
aluno.nome = 'igore'
aluno.nota3 = [5.8, 9.8]
// testando conhecimento para adcionar propriedades ao objeto
console.log(aluno.nome)
console.log(aluno['nota3'][1])
console.log(aluno.nota3[1])
console.log(aluno)