/*class Usuario{
    
    constructor()
    {
        console.log('construtor é executado quando instanciado')
        this.nome = 'Vini' //this = CLASSE
    }

    cadastrar()
    {
        console.log('cadastrar')
    }

    listar()
    {
        console.log('listar: ' + this.nome)

        //this.mostrarMensagem()
    }

    atualizar()
    {
        console.log('atualizar')
    }

    mostrarMensagem()
    {
        alert('mensagem para o usuario')
    }
}

let user = new Usuario

user.listar()
console.log(user.nome)
*/

class Calculadora{

    constructor()
    {
        this.calcula()
    
    }
    calcula()
    {
        const n1 = document.getElementById('num1').value
        const n2 = document.getElementById('num2').value

        console.log(n1)

        const resultado = this.subtracao(n1, n2)
    
        this.exibeResultado(resultado)
    }
    soma(num1, num2)
    {
        let n12 = Number(num1)
        let n22 = Number(num2)

        return n12 + n22
    }
    subtracao(num1, num2){
        let n12 = Number(num1)
        let n22 = Number(num2)

        return n12 - n22
    }
    exibeResultado(texto)
    {
        document.getElementById('resultado').innerText = texto
    }
}
new Calculadora
