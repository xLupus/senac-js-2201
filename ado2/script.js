
const BTN = document.getElementById('enviar')
BTN.addEventListener('click', function(){

    let username = document.getElementById('nome').value
    
    let age_output = document.getElementById('age-output')
    let name_output = document.getElementById('name-output')

    let url = `https://api.agify.io/?name=${username}`

    fetch(url).then(function(response){
        return response.text()

    }).then(function(response){

        response = JSON.parse(response)
        
        age_output.textContent = response.age
        name_output.textContent = response.name
    })
})
