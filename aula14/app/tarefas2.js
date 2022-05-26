
//Delegação de eventos é usado quando você quer

const FORMULARIO = document.querySelector('#form-tarefa')
const LISTA = document.querySelector('.collection')
const BTN_LIMPAR = document.querySelector('.limpar-tarefas')
const FILTRO = document.querySelector('#filtro')
const CAMPO_TAREFA = document.querySelector('#tarefa')


function carregaMonitordeEventos(){

    //Eventos
    document.addEventListener('DOMContentLoaded', pegaTarefa)
    FORMULARIO.addEventListener('submit',adicionaTarefa)
    LISTA.addEventListener('click', apagaTarefa)
    BTN_LIMPAR.addEventListener('click', apagarTodasTarefas)
    FILTRO.addEventListener('keyup', filtrarTarefas)
}
function adicionaTarefa(event){

    event.preventDefault()

    if(CAMPO_TAREFA.value === ''){ //verifica se o campo esta vazio
        
        alert('Insira uma tarefa')

    }else{
        //Inicio da criação dos novos elementos
        const LI = document.createElement('li')
        LI.className= 'collection-item'
        LI.id = 'novo-item'
        LI.appendChild(document.createTextNode(CAMPO_TAREFA.value))

        const A = document.createElement('a')
        A.className = 'apaga-tarefa delete-item secondary-content'
        A.setAttribute('href','#')

        const ICON = document.createElement('i')
        ICON.className = 'fa fa-remove'

        A.appendChild(ICON)
        LI.appendChild(A)
        //Fim da criação dos novos elementos

        //Adiciona a lista de tarefas
        LISTA.appendChild(LI)

        gravaTarefaDentroLocalStorage(CAMPO_TAREFA)
        gravaTarefaNoback(CAMPO_TAREFA)
        CAMPO_TAREFA.value = ''
    }

}
function gravaTarefaNoback(tarefa){
    
    console.log(tarefa.value)

    let myInit = { method: 'POST',
                   headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                   mode: 'cors',
                   cache: 'default',
                   body: JSON.stringify({descricao: tarefa.value, imagem: ''})
                };

    
    fetch("http://localhost:8080/senac-js-2201/aula14/app/api/v1/tarefa.php",myInit).then(function(resultado){
        return resultado.text()
    }).then(function(conteudo){
        console.log(conteudo)
    })


}
function gravaTarefaDentroLocalStorage(tarefa){

    let tarefas

    if(localStorage.getItem('tarefas') === null){
        tarefas = []
    }else{
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }

    tarefas.push(tarefa.value)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

}
function pegaTarefa(){
    let tarefas

    $.ajax({
        type: "GET",
        url: "http://localhost:8080/senac-js-2201/aula14/app/api/v1/tarefa.php",
        dataType: "json",
        success: function(result){
            
            result.forEach(function(tarefa){

                //let str = `ID:${tarefa.id} Descricao: ${tarefa.descricao} Imagem: ${tarefa.imagem ?? 'N/D'} Apagado:${tarefa.apagado}`

                const LI = document.createElement('li')
                LI.className= 'collection-item'
                LI.id = 'novo-item'
                LI.appendChild(document.createTextNode(tarefa.descricao))
        
                const A = document.createElement('a')
                A.className = 'apaga-tarefa delete-item secondary-content'
                A.setAttribute('href','#')
        
                const ICON = document.createElement('i')
                ICON.className = 'fa fa-remove'
        
                A.appendChild(ICON)
                LI.appendChild(A)
                LISTA.appendChild(LI)            
            })
        },
        error: function(xhr,status,error){
            alert(`Result ${status} ${error} ${xhr.statusText}`)
        }
    })
}
function apagaTarefa(evento){
    
    evento.preventDefault()

    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove()
    }


}
function apagarTodasTarefas(event){
    
    event.preventDefault()

    LISTA.innerHTML = ''


}   
function filtrarTarefas(event){

    const TEXTO = event.target.value.toLowerCase()
    
    document.querySelectorAll('.collection-item').forEach(function(tarefa){
        const ITEM = tarefa.firstChild.textContent

        // -1 significa que não ha o que esta sendo buscado
        if( ITEM.toLowerCase().indexOf(TEXTO) != -1) { 
            tarefa.style.display = 'block'
        }else{
            tarefa.style.display = 'none'
        }

    })
}

carregaMonitordeEventos()
