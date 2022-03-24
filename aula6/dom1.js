//Criação de Elementos

//LI
const LI = document.createElement('li');

LI.className= 'collection-item';

LI.id = 'novo-item';

LI.setAttribute('title','pare o mouse para ver');

const TEXTO = document.createTextNode('Tarefa inserida dinamicamente');

LI.appendChild(TEXTO);


//LINK
const LINK = document.createElement('a');

LINK.className = 'delete-item secondary-content';

LINK.setAttribute('href','#');


//LINK.innerHTML = '<i class="fa fa-remove"></li>'; substitui tudo do ICON ate Colocando tudo.


//ICON
const ICON = document.createElement('i');

ICON.className = 'fa fa-remove';

LINK.appendChild(ICON);

LI.appendChild(LINK);


//Colocando tudo
const UL = document.querySelector('ul.collection');

UL.appendChild(LI);


//Exibindo no Console
console.log(LI);


//append - adicionar


//ATUALIZAR ELEMENTO
//CRIANDO UM ELEMENTO NOVO
const novoTITULO = document.createElement('h2');

novoTITULO.id = 'task-title';

novoTITULO.appendChild(document.createTextNode('Listinha'));


const antigoTITULO = document.querySelector('h5');

const ElementoPai = document.querySelector('div.card-action');

ElementoPai.replaceChild(novoTITULO, antigoTITULO);