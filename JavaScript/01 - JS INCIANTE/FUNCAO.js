function media(n1,n2){
/* FUNCTION, ou função funciona como uma operação comum com variáveis
para chamar ela function media(nome da função), que dentre parenteses, 
vão receber o nome das suas variaveis sem precisar declarar var.*/
var nota1 = n1
var nota2 = n2
/* declaro que a minha variável vai retornar como o valor da função */
var media = (nota1 + nota2) / 2
/*console.log(media)*/
return media
// aqui declaro que media vai retronar para a função
}

var resultado1 = media(6, 7)
/* depois que a função roda e a media retorna, podemos declarar para ela da seguinte forma
a variavel criada recebe o valor da função media (6, 7), ou seja media (n1=6, n2=7)
assim os valores são alterados na função sem que precisemos ficar alterando o valor da variavel */
console.log(resultado1)
// a operação acontece e depois é impresso na tela