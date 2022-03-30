//tamanho da tela
const tamanho = `A: ${window.innerHeight} x L: ${window.innerWidth}`;

const navegador = window.navigator; 

const paragrafo = document.getElementById('paragrafo');

console.log(navegador);

paragrafo.innerText = navegador;

