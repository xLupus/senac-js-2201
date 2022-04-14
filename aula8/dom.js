
//event bubbling

const CARD_TITLE = document.querySelector('.card-title')
CARD_TITLE.addEventListener('click',function(event){

    console.log('Titulo')

})

const CARD_CONTAINER = document.querySelector('.card-content')
CARD_CONTAINER.addEventListener('click', function(event){

    console.log('Form')
})

const CARD = document.querySelector('.card')
CARD.addEventListener('click', function(event){

    console.log('Tudo')
})


