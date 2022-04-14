
//De objeto JSON para string
const OBJ = {   nome: 'Vinicius',
                idade: 21,
                fazCompra: function(){
                    console.log('comprou algo')
                }
            };

console.log(JSON.stringify(OBJ))


//De string para OBJ
const STR = '{"nome": "Vinicius","idade": 21}';
console.log(JSON.parse(STR))


//Armazena
localStorage.setItem('nome','Vinicius') //Armazena em todas as abas abertas no mesma URL

sessionStorage.setItem('idade','37') //Armazena na aba da URL aberta

//Acessar
const NOME = localStorage.getItem('nome')
console.log(NOME)

const IDADE = sessionStorage.getItem('idade')
console.log(IDADE)




const BTN = document.querySelector('input.btn')
BTN.addEventListener('click', function(evento){
    evento.preventDefault()

    const TEXTO_USER = '{"tarefa": "' + document.querySelector('input#task').value + '"}'

    console.log(JSON.parse(TEXTO_USER))

    localStorage.setItem('tarefa', TEXTO_USER)

    document.querySelector('input#task').value = ''

})

const TRF = localStorage.getItem('tarefa')

if(TRF)
    document.querySelector('#exibe').innerText = TRF















/*

classe = uma pacote com variaveis e funcoes sobre uma determinada coisa
metodo = funcoes
variavel = atributo

classe = é a planta de uma casa
objeto = é a casa pronta

#Um objeto tem uma classe dentro dele

json = 


parse(variavel) string para obj
stringify(variavel) obj para string
*/