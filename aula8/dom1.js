//Delegação de Evento
document.body.addEventListener('click', apagaItem)

function apagaItem(event){

    event.preventDefault()

    if( event.target.parentElement.classList.contains('delete-item') === true){

        event.target.parentElement.parentElement.remove()
    }
}

