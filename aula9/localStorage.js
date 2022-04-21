
//De objeto JSON para string
const OBJ = {   nome: 'Vinicius',
                idade: 21,
                fazCompra: function(){
                    console.log('comprou algo')
                }
            };

//De string para OBJ
const STR = '{"nome": "Vinicius","idade": 21}';

//Armazena
localStorage.setItem('nome','Vinicius') //Armazena em todas as abas abertas no mesma URL

sessionStorage.setItem('idade','37') //Armazena na aba da URL aberta

//Acessar
const NOME = localStorage.getItem('nome')

const IDADE = sessionStorage.getItem('idade')


//recupera o valor do input preenchido do usuario e adiciona no storage
const BTN = document.querySelector('input.btn')
BTN.addEventListener('click', function(evento){
    evento.preventDefault()

    const TEXTO_USER = document.getElementById('task').value

    let tarefas;

    if( localStorage.getItem('tarefas') === null){

        tarefas = []

    }else{

        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }

    tarefas.push(TEXTO_USER)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    console.log(tarefas)

    document.getElementById('task').value = ''


})

//Para sessionStorage é o trocar todos os localStorage por sessionStorage

