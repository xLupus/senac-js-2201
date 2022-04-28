document.getElementById('fetch').addEventListener('click', carregaConteudo)

function carregaConteudo(){

    fetch('conteudo.txt').then(function(resultado){
        return resultado.text()

    }).then(function(conteudo){

        document.getElementById('exibe-conteudo-recuperado').innerText = conteudo
    })
}