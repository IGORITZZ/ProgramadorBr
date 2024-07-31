let p = document.getElementById('p1')
p.innerHTML = 'novo documento'
/* Por meio de uma váriavel local let e também de uma propriedade do elemento document, consigo selecionar 
e alterar um texto HTML por meio do JS*/
p.innerText = 'novo texto'
p.textContent = 'novo de novo'
/* as diferenças de innerText e textContent para innerHTML
innerHTML : além de preencher com texto, suponhamos que adicionamos a tag <h2> junto ao texto, 
justamente para isso que serve, além de texto ele reconhece tags HTML.
innerText : assim como o o exemplo acima, não vai identificar, e tudo sera um texto (string)
textContent : identico ao innerText, porém ele pode nos mostrar texto oculotos no código. */

p.className = ""
// para atribuir novo valor a classe
p.style = 'color:blue'
// forma simplificada de alterar cor da funte
let meuAtt = p.getAttribute('meuAtt')
// criando um novo atributo de mostrando no console em forma de variavel
p.setAttribute('meuAtt', 'IGOR')
// renomeando um atributo (nome atributo, novo nome do atributo), no caso do atributo ter o mesmo nome
p.setAttribute('NOVO', 'qualquer_coisa')
//criar um novo atributo (atributo, valor)
p.style.backgroundColor = 'red'
// forma simplificada de alterar cor de fudo