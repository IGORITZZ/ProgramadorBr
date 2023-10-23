var alunos = ['IGOR', 'JOSE', 'MARCOS', 'MARIANA ']
/* Arrey nada mais é do que o agrupamento de valores dentro de uma só variavel.
Como no exemplo ele pode ser definido como valor de varivel como new Arrey()
recebendo seus valores dentro de (), numerous ou strings.
outra forma de definir o arrey é colocar os valores dentro de [] */
for (var aluno in alunos){
    console.log(aluno)
}
/* bom dessa forma virmos que ao usar in no loop FOR, a variavel i vai somente
imprimir o index do elemento, ou seja o primiero indice é a linha 0, assim
imprime o valor 0*/
for (var aluno of alunos){
    console.log(aluno)
}
/* já dessa forma ele vai imprimir o conteudo daquele indice(i), sendo assim, 
igor era na posição 0, irar imprimri igor e assim por diante. mas fazendo mais 
sentido dar outro nome a variável, invés de i*/