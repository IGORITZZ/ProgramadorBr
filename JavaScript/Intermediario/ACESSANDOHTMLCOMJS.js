let p1 = document.getElementById('p1')
/* Para buscarmos um elemnto HTML pelo JavaScript, nesse caso por meio de ID, seria o getElementById, e passamos o valor do ID
que buscamos entrne aspas '', nesse caso vai nos retornnar o código que esta agregado ao ID p1*/
let pr = document.getElementsByClassName('paragrafo')
/* O mesmo vale para um elemento que seria atribuido por meio de classe, sendo assim por meio de getElementsByClassName, 
nesse modo, como classe pode ser atribuido em mais de um elemento, vai retornar todos os elemento que tem essa mesma classe,
no caso a classe paragrafo. */
console.log(p1);
console.log(pr);

for (let p of pr){console.log(p);}
/* Nessa casso, para a let p (variavel) de pr(outra variavel), o retorno vai ser a impressão do elemento p,
pois a impressão de document.getElementsByClassName e em forma de array, agora nesse modo, vai imprimir os dois
separadamnete na tela*/ 

let tp = document.getElementsByTagName('p')
/* Para imprimir todas as tag de uma só vez, vamos usar o document.getElementsByTagName, nesse caso a tag p entre '',
vai imprimir todas as tag p dento do código em forma de array*/
console.log(tp); 
console.log(tp[1]);