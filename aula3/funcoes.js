//Função
function olaMundoNoLog(nome) {
    console.log(`Ola ${nome}!`);
};

//Expressão de Função #1
const SOMA = function(a,b) {
    return a + b;
};

//Chama e executa a função (anonima):
(function(a, b){
    console.log(a + b);
})(3,3);


olaMundoNoLog('Lucas');

let resultado = SOMA(2,2);
console.log(resultado);


//Exercicio
let vinicius = ['vinicius', 18, 174, 'são paulo'];

function ultimoElemento(array) {

    let ult = array.length - 1;

    return array[ult];
};

console.log('Ultimo elemento = ' + ultimoElemento(vinicius));


//Datas

let hoje = new Date;
//new = transforme a classe no objeto dela

console.log( hoje.getFullYear() );
console.log( hoje.getMonth() + 1 );
console.log( hoje.getDate() );
console.log( hoje.getHours() );
console.log( hoje.getMinutes() );
console.log( hoje.getSeconds() );

//
function mesAtual() {

    const MES = [   'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'];

    let objDate = new Date;

    let atual = objDate.getMonth();

    return MES[atual];
}

console.log(mesAtual());

//
let hora = new Date;

console.log(`${hora.getHours()} : ${hora.getMinutes()} : ${hora.getSeconds()}`);


//DOM - Document Object Model



