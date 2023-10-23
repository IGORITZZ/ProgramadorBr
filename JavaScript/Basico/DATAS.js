var d = new Date(1997, 11, 29, 12, 56, 59)
// datas segue um padrão (year, mounth, day, hours, minutes, seconds, milliseconds)
// sendo assim (1997 ano, 11 mes(que nesse caso se lê como index), 29 data, 12 hora, 56 minutos, 59 segundos(sem milisegundos))
var d2 = new Date("dec 29 1997 12:56")
// pedendo sem em forma de string tambem, mas ai seria de acordo com o formato americano
// que seria (mes/dia/ano), podendo ser o mes em sua forma abreviada ou numerica
var d3 = new Date('12/29/1997')
// possivel dessa maneira com ajuda das barrs (mes/dia/ano)
var d4 = new Date('12-29-1997')
// também funciona com o sinal de (mes-dia-ano)
var d5 = new Date('1997')
// dessa forma como string, colocando o ano ele retorna um ultimo dia do ano anterior ao escolhido
var d6 = new Date ('29/12/1997')
// ao usar o nosso formato, ele retorna um erro informando que a data esta incorreta
console.log(d)
console.log(d2.getDate())

var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
console.log(d3)
console.log(dias[d.getDay()])
// getDay serve para acionar qual dia da semana é, nos valores de 1 a 6, sendo 1 = domingo e 6 = sabado
// sendo assim para mostrarmos em tela como dias da semana e não como numeros, criamos vaiavel
// sendo feito um Arrey, e dando index o getDay, que gerando o valor vai puxar o valor de um Array e vai nos dar o dia da semana

var meses = ['jan','fev','mar','abr','jun','jul','ago','set','out','nov','dez']
console.log(d4)
console.log(meses[d4.getMonth()])
// para garantir o mes, seria o mesmo cógigo utlilizado na data
console.log(d5.getFullYear())
// aqui o metododo getFullYear vai retornar somente o ano da data inserida
// metedo são usado como funções ou para funções, então para que funcione, necessário adicionar parenteses ()
console.log(d6)

// IMPORTANTE, quando colocamos mês como numérico, o código entende como um index (0 a 11(jan - dez))
// SENDO assim o mês 8 seria jullho(7) e não agosto(8)
// SÃO identificados 12 numeros, de 0 a 11 (jan - dez)
// é possivel também informar a data em forma de string ('sep 05 2017 23:22')

// inves de get vamos usar set, que basicamente vai alterar o dado
// dado metodo o valor entre () sera o valor que ira alterar
console.log(d)
console.log(d.setDate(28))
console.log(d.setFullYear(2016))
console.log(d)