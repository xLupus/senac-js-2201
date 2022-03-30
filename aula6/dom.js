//Manipulação de Elemento
const ITENS = document.querySelector('ul.collection');

let itens = ITENS.children[0].firstChild.textContent = 'uai';

let text = document.getElementsByClassName('input-field');

let texto = text[0].children[1].textContent = 'Do balacobacu';

console.log(texto);


//const IT = document.querySelector('form div label');

//children-parents-sibling
//childElementCount

const BOTON = document.getElementsByClassName('clear-tasks btn black');

console.log(BOTON[0].textContent = 'SEM NADA PRA FAZER');

