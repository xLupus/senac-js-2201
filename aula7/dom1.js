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

console.log(BTN)


BTN.addEventListener('click', function(evento){

    evento.preventDefault()

    const LISTA = document.querySelector('ul.collection')

    const LI = document.createElement('li');
    LI.className= 'collection-item';
    LI.id = 'novo-item';

    const TEXTO_USER = document.querySelector('input#task').value
    const TEXTO = document.createTextNode(TEXTO_USER)

    const LINK = document.createElement('a');
    LINK.className = 'delete-item secondary-content';
    LINK.setAttribute('href','#');

    const ICON = document.createElement('i');
    ICON.className = 'fa fa-remove';

    LINK.appendChild(ICON);
    LI.appendChild(TEXTO);
    LI.appendChild(LINK);
    LISTA.appendChild(LI)

    document.querySelector('input#task').value = ''
})

