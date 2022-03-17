/*Elementos Unicos

console.log(document.querySelector('li:last-child').innerText);
console.log(document.querySelector('li:first-child').innerText);
console.log(document.querySelector('li:nth-child(2)').innerText);
console.log(document.querySelector('li:nth-child(3)').innerText);

*/

/* Elementos Multiplos

console.log(document.getElementsByClassName('collection-item'));

const itens = document.getElementsByClassName('collection-item');

itens[0].style.color = '#ccc';
itens[3].style.color = 'rgb(14,120,120)';

*/

//OU

/* 

const itens = document.querySelector('ul').getElementsByClassName('collection-item');
itens[3].style.color = '#ccc';

*/

//OU

/*
const itens = document.getElementsByTagName('li');

itens[0].style.color = 'red';
itens[1].style.color = 'green';
itens[2].style.color = 'blue';
itens[3].style.color = 'purple';
*/

const itens = document.getElementsByTagName('li');

//console.log(itens);

let itensArray = Array.from(itens);

/*
itensArray.forEach(function(li, indice){
    //console.log(indice + ': ' + li.innerText);
    console.log(`${indice} : ${li.innerText}`);
});
*/
let itensImpares = document.querySelectorAll('li:nth-child(odd)');

console.log(itensArray);

for(let i = 1; i <= itensArray.length; i += 2){
    itensArray[i].style.background = 'red';
}
