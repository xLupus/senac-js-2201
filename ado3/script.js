
const BTN = document.getElementById('enviar')
BTN.addEventListener('click', function(){

    let user_number = document.getElementById('numero').value
    let output = document.getElementById('output')

    let url = `HTTP://NUMBERSAPI.COM/${user_number}/math`

    fetch(url).then(function(response){
        return response.text()
    }).then(function(curiosidade){
        output.textContent = curiosidade
    })
})
