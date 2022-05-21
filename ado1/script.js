
const BTN = document.getElementById('calcular')

BTN.onclick = () => {

    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')

    const IMC = (peso.value / (altura.value ** 2)) * 10000

    let resultado = document.getElementById('result')
    
    resultado.textContent = IMC.toFixed(1)
    resultado.style.color = 'red'

    peso.value = ''
    altura.value = ''

};
