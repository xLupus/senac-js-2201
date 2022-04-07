/*
document.querySelector('input.btn').addEventListener('click', function(evento){
    //console.log(evento)

    evento.preventDefault() // evita o comportamento padrao

    console.log(evento.target.className)
})

*/

/*
document.getElementById('senac').addEventListener('click',function(event){
    event.preventDefault()
})


const TITULO = document.querySelector('span.card-title')

console.log(TITULO)
*/


/* Com click
TITULO.addEventListener('click',function(evento){

    document.getElementById('task-title').style.color = 'red'

})
*/


/* Com mouse em cima
TITULO.addEventListener('mouseover',function(evento){

    document.getElementById('task-title').style.color = 'red'

})
*/


/* Limpa todas as tarefas

const BTN_CLEAR_TASKS = document.querySelector('a.clear-tasks.btn.black')

BTN_CLEAR_TASKS.addEventListener('click',function(event){

    event.preventDefault()

    const UL = document.querySelector('ul.collection')

    const LI = document.querySelectorAll('li.collection-item')

    LI.forEach(function(valor,ind){
        UL.removeChild(LI[ind])
    })
})

*/
/*
const CARD = document.querySelector('.card')
const TITULO = document.querySelector('h5')

CARD.addEventListener('mouseover', mostraEvento)

function mostraEvento(evento){

    console.log(`Tipo de evento: ${evento.type}`)

    TITULO.textContent = `Eixo X: ${evento.offsetX} Eixo Y: ${evento.offsetY}`

    document.body.style.backgroundColor = `rgb(${evento.offsetX}, ${evento.offsetY}, 40)`

}

*/


const BTN = document.querySelector('input.btn')

BTN.addEventListener('click', function(evento)
{
    evento.preventDefault()

    const UL = document.querySelector('ul.collection')

    const LI = document.createElement('li');
    LI.className= 'collection-item';
    LI.id = 'novo-item';

    const TEXTO_USER = document.querySelector('input#task').value
    const TEXT = document.createTextNode(TEXTO_USER)

    const A = document.createElement('a');
    A.className = 'delete-item secondary-content';
    A.setAttribute('href','#');

    const I = document.createElement('i');
    I.className = 'fa fa-remove';

    A.appendChild(I);
    LI.appendChild(TEXT);
    LI.appendChild(A);
    UL.appendChild(LI)

    document.querySelector('input#task').value = ''
})

