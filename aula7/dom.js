//ElementoPai.replaceChild(novoTITULO, antigoTITULO); trocar filhos

const ITENS = document.querySelectorAll('li')

//ITENS[0].remove(); //remove o item

console.log(ITENS)

const LISTA = document.querySelector('ul')

//LISTA.remove();  remove tudo
//LISTA.removeChild(ITENS[1]); // remove um filho especifico

ITENS.forEach(function(valor,ind){
    LISTA.removeChild(ITENS[ind])
})


const BTN_ADD = document.getElementsByClassName('btn')


console.log(BTN_ADD[0])


//BOX[0].classList.remove('input-filed')
//BOX[0].classList.add('collection-item')

