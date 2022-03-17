//console.log(window);

const p = document.getElementById('paragrafo');

//p.innerText = "Testando, testando...";
//p.style.color = 'red';
//p.style.backgroundColor = '#ccc';

let colors = ['blue','red','yellow','#ccc','black','purple'];

for(i = 0, c = 0; i <= 30; i++, c++){

    p.style.color = colors[c];

    console.log(p.style.color);

    if(c >= 6) c = -1;
}


