
//XML
const BTN = document.querySelector('button')
BTN.addEventListener('click', buscarDados)

function buscarDados(){
    
    const XHR = new XMLHttpRequest

    XHR.open('GET', 'http://10.135.236.34:5500/AJAX/conteudo.txt', true)
            //'metodo', 'URL', true 

    XHR.onload = function(){
    
        if(this.status === 200){ //HTTP code 200 OK
            document.getElementById('exibe-conteudo-recuperado').innerText = this.responseText
        }
    }
    
    XHR.send() //realiza a requisição

}






//devmedia http-status-code
//10.135.236.34