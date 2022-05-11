
//XML
const BTN = document.querySelector('button')
BTN.addEventListener('click', buscarDados)

function buscarDados(){

    const XHR = new XMLHttpRequest
    let resposta = document.getElementById('exibe-conteudo-recuperado')

    try{
        XHR.open('GET', 'http://10.135.236.34:5500/AJsAX/conteudo.txt', true)
            //'metodo', 'URL', true 

        if(XHR != true){
            throw new ReferenceError('Conexao n realizada')
            
        }
        XHR.onload = function(){
        
            if(this.status === 200){ //HTTP code 200 OK
                resposta.innerText = this.responseText
            }
        }
        XHR.send() //realiza a requisição

    }catch(erro){
        console.log(erro)
    }
}
//devmedia http-status-code
//10.135.236.34