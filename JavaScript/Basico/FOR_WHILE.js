var numero = Math.random() * 100
/* Match.randon() serve para gerar um numero de forma randomica.
porém como gera esse numero de 0 atpe 1.0, multiplicamos por 100*/

for (var vez = 0; vez < numero; vez++){

console.log('executando ' + vez + ' vez')
/* Nesse loop FOR, para cada vez que o valor for menor que o da variavel
é acrescentado ++ e o ultimo valor não é apresentado */
}

while(numero < 90){

    console.log(numero)
    numero = Math.random() * 100
/* já while, quando o numero for menor que o valor apresentado ele para
se não defenirmos como esse valor apresentado pode ocorrer erros, como
o de loop infinito, aonde o while não para de repetição */   
}
console.log(numero) /* while não me informa o numero final da operação, sendo necessário imprimir*/
console.log('acabou')