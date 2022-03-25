
const p = document.getElementById('paragrafo');

p.innerText = "Testando, testando...";

let valor = parseInt(prompt());

for(let i = 0; i <= valor; i++){
    let oi = p.innerText = "oi = " + i;
    //42
    //document.write(oi + "<br>");
    console.log(oi);
    
}

console.log(window);

//confirm(); retorna uma booleana true ou false;
//console.log(valor);