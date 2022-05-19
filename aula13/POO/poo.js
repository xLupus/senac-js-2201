class Calculadora{

    constructor()
    {
        try{
            const operacao = document.getElementById('operacao').value
            this.calcula(operacao)
        }catch(e){
            alert('Escolha uma operacao')
        }
    }

    calcula(operacao)
    {
        const n1 = document.getElementById('num1').value
        const n2 = document.getElementById('num2').value

        let resultado = 0

        switch (operacao) {
            case 'soma':
                resultado = this.soma(n1, n2)
                break;
            case 'subtracao':
                resultado = this.subtracao(n1, n2)
                break;
            default:
                throw SyntaxError('Operacao não disponivel');
        }
    
        this.exibeResultado(resultado)
    }

    soma(num1, num2)
    {
        let n1 = Number(num1)
        let n2 = Number(num2)

        return n1 + n2
    }
    subtracao(num1, num2){
        let n1 = Number(num1)
        let n2 = Number(num2)

        return n1 - n2
    }
    exibeResultado(texto)
    {
        document.getElementById('resultado').innerText = texto
    }
}

class CalculadoraAvancada extends Calculadora{

    constructor(){
        super() //executa o construtor da classe herdada (da super classe)
    }

    //polimorfismo - reescreve algum metodo
    calcula(operacao)
    {
        const n1 = document.getElementById('num1').value
        const n2 = document.getElementById('num2').value

        let resultado = 0

        switch (operacao) {
            case 'soma':
                resultado = this.soma(n1, n2)
                break;
            case 'subtracao':
                resultado = this.subtracao(n1, n2)
                break;
            case 'dividir':
                resultado = this.dividir(n1,n2)
                break;
            case `multiplicar`:
                resultado = this.mutiplicar(n1,n2)
                break;
            default:
                throw SyntaxError('Operacao não disponivel');
        }
    
        this.exibeResultado(resultado)
    }

    mutiplicar(num1,num2){
        let n1 = Number(num1)
        let n2 = Number(num2)

        return n1 * n2
    }

    dividir(num1,num2){
        let n1 = Number(num1)
        let n2 = Number(num2)

        return n1 / n2
    }

    static metodoEstico(){
        console.log('Executou')
    }
}

document.getElementById('calc').addEventListener('click', function(e){
    e.preventDefault()

    const obj = new CalculadoraAvancada

})


CalculadoraAvancada.metodoEstico()