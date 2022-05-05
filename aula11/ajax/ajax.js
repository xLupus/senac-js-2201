//XML
const BTN = document.querySelector('button')
BTN.addEventListener('click', mostraCotacao)


function mostraCotacao(){
    fetch('http://10.135.236.34:5500/AJAX/cotacoes.html').then(function(resultado){
        return resultado.text()

    }).then(function(cotacoes){
        
        const UL = document.querySelector('ul')
        UL.innerHTML = ''

        const API = JSON.parse(cotacoes)
        let especie = API.moedas
        let valor = API.valores

        for(let i = 0; i < especie.length; i++){

            let LI = document.createElement('li')
            let text = document.createTextNode(`${especie[i]}: ${valor[i]}`)
            LI.appendChild(text)
            UL.appendChild(LI)
        }
    })
}
