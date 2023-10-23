console.log(document.body);
/* Como visto anteriormente document é uma propriedade que nos mostrar o conteudo do documento html, o código.
agora document.body, nos mostra somemente o código que estiver em body, nesse casso está <script src="DOCUMENT2.js"></script>, 
o correto é qie mostre esse conteúdo.*/
console.log(document.body.innerHTML);
/* essa proprideade innerHTML vai tranformar o código HTML dentro de body em uma string, sendo possivel assim modificar o 
código pro meio do JavaScript */

console.log(document.body.innerHTML = 
    '<h1>HTML<h1>' + document.body.innerHTML
    );

/* Seguindo a lógica de que document.body.innerHTML seria uma propriedade e sendo assim pode receber um valor,
e que o valor mostrado por essa propriedade seria uma string. vamos atribuir valor e fazer uma concatenação com 
os valores que ele já mostrava, sendo assim possivel fazer uma edição no código.*/ 