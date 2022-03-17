const p = document.getElementById('paragrafo');
const titulo = document.querySelector('p');

console.log(titulo);
p.innerText = 'Meu texto!';

if(confirm('Quer entra com um valor?')){

    let valor = prompt('Entre com um número de 0 a 10');

    if( valor >= 0 && valor <= 10){

        for(let i = 0; i <= valor; i++){
            let oi = p.innerText = "oi = " + i;
            //42
            //document.write(oi + "<br>");
            console.log(oi);
            
        }

        titulo.style.backgroundColor = 'brown';
    } else {

        p.innerText = 'Valor inválido';

        titulo.style.backgroundColor = 'yellow';
    }

} else {
    p.innerText = 'Que pena que você não entrou com um valor :-(';
    titulo.style.backgroundColor = 'purple';
}