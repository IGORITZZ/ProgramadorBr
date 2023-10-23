// Carne: 400gr por pessoa + 6 horas = 650gr
// Cerveja 1200ml por pessoa + 6 horas = 2000ml
// Refrigerante/Agua: 1000ml por pessoa + 6 horas = 1500ml

// Criança vale por 0,5, e não bebe cerveja

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultato = document.getElementById("resultado")
// capturar campo dos valores, para captar o valor é usar .value
console.log(inputAdultos.value, inputCriancas.value, inputDuracao.value, resultato.value);

    function calcular(){
        console.log('Calculando...');

        let adultos = inputAdultos.value
        let criancas = inputCriancas.value
        let duracao = inputDuracao.value
        //capturando valores de cada campo com .value
        let qntTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
        let qntTotalCerveja = cervejaPP(duracao) * adultos
        let qntTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas)
        // operação para o calculo ocorrendo em outras funções
        console.log(qntTotalCarne);

        resultato.innerHTML = `<p>${qntTotalCarne / 1000}Kg  de Carne</p>`
        resultato.innerHTML += `<p>${qntTotalCerveja / 1000}L de Cerveja</p>`
        resultato.innerHTML += `<p>${qntTotalBebidas / 1000}L de Bebidas</p>`
        // para inseirir uma tag junto ao innerHTML usamos ``
        // para que adicionar outro innerHTML sem apagar o anterior, vamos colocar += para ele entender que vai ser adicionamo mais um 
        // usamos $para puxar valor extraido de uma função, e dentro de {}, ficando ${}
        // dentro desse sinal ${}, pode ocorrer até operações
    }

    function carnePP(duracao){
        if(duracao >= 6){
            return 650
        }
        else{
            return 400
        }
    }
    
    function cervejaPP(duracao){
        if(duracao>=6){
            return 2000
        }
        else{
            return 1200
        }
    }

    function bebidasPP(duracao){
        if(duracao>=6){
            return 1500
        }
        else{
            return 1000
        }
    }
    // operações para calculo da função princiapal, aonde o argumento duração vai retornar um valor dependendno do valor que for insiserido nos campos da função principal