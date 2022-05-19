
$() //$(o que eu quero selecionar vem aqui)(querySelector)

/*
$().ready()  so ativa o script depois que a pagina inteira estiver carregada
*/

$(document).ready(function(){
    console.log($('#num1').val())
    console.log($('h2').text())
    console.log($('div').html())
    console.log($('h2.titulo').text())
    console.log($('.titulo').text())


    $('p').text('Lorem Ipsum')


    $('#calc').click(function(){
        $('p').css({
            'color':'red',
            'font-size':'2rem'})
    })


    $.ajax({
        type: "GET",
        url: "https://www.boredapi.com/api/activity",
        dataType: "json",
        success: function(result,status,xhr){
            console.log(result)
            console.log(status)
            console.log(xhr)

            $('p').text(`${result.activity}`)
        },
        error: function(xhr,status,error){
            alert(`Result ${status} ${error} ${xhr.statusText}`)
        }

    })


})

