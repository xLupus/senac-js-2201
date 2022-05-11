

try{ //tenta executar o bloco de codigo
    let a = 'b'

    if(typeof a != 'boolean'){
        throw new SyntaxError('A tem que ser TRUE ou FALSE')
    }

}catch(error){ // se n conseguir executar o codigo anterior pegue o erro
    //alert('Funcao chamada n existe')

    console.log(error.name)
    console.log(error.message)
    console.log(error instanceof ReferenceError)

    /*
        EvalError	An error has occurred in the eval() function
        RangeError	A number "out of range" has occurred
        ReferenceError	An illegal reference has occurred
        SyntaxError	A syntax error has occurred
        TypeError	A type error has occurred
        URIError	An error in encodeURI() has occurred
    */

}finally{ //Executa de qualquer jeito
    console.log('Execute!')
}


console.log('teste')