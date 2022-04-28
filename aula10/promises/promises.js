const POSTS = [
    {tilulo: 'Post 1', cont: 'Conteudo post um'},
    {tilulo: 'Post 2', cont: 'Conteudo post dois'}
]
/*Exemplo com callback

function criaPost(post,callback){
    POSTS.push(post)
    callback()
}
function getPost(){

    let saida = ''

    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`
    })

    document.body.innerHTML = saida
}

*/

//Exemplo com Promise
function criaPost(post){
    return new Promise(function(resolve,rejeita){

        const ERR = true

        if(!ERR){
            POSTS.push(post)
            resolve()
        }else(
            rejeita('Erro, nao foi possivel executar')
        )

    })
}
function getPosts(){

    let saida = ''

    POSTS.forEach(function(post){
        saida += `<li>${post.titulo}</li>`
    })

    document.body.innerHTML = saida
}

criaPost({titulo: 'Post 3', cont: 'Conteudo post tres'}).then(getPosts).catch(function(erro){
    console.log(erro)
})

/*

callback - 



resolve vira then()
e rejeita vira catch()

then - se der certo ; catch - se der erro  ;

*/