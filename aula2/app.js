const QNT_PAGINAS = 10;

let nome = 'Vinicius';

let alunos = [  'Carol', 
                'Oroch', 
                'Vinicius'];


//Objeto
let senac = {alunos:[   'Carol', 
                        'Oroch', 
                        'Vinicius'],

            professores: [  'Bono',
                            'Claro',
                            'Karin'],

            campus: [   'CUS'],

            addAluno: function(){
                alert('addAluno');
            }
};
//

console.log(senac);
console.table(alunos);
console.log(senac.professores[1]);
//senac.addAluno();

//senac.aluno.idade  -- Exemplo



if(nome != 'Vinicius'){
    console.log('Nome errado');
}
else{
    console.log('Nome certo');
}


//switch

const HOJE = 3;

switch (HOJE) {
    case 7:  //dessa forma se for 0 e 7 ele entra em domingo
    case 0:
        console.log('Domingo')
        break;

    case 1:
        console.log('Segunda')
        break;

    case 2:
        console.log('Terceira')
        break;

    case 3:
        console.log('Quarta')
        break;

    case 4:
        console.log('Quinta')
        break;

    case 5:
        console.log('Sexta')
        break;

    case 6:
        console.log('Sabado')
        break;

    default: //caso o valor nao seja nenhum dos cases
        console.log('Dia invalido')
        break;
};
//

//Ternario

let dia = HOJE == 3 ? 'Quarta' : 'Outro dia'; 
console.log(`O dia é ${dia}`);

//

//

//let bono = null;
let bono = 'Bono não é nulo';
let saida = bono ?? 'Não existe bono';
console.log(saida);
//


/* OPERADORES Aritmeticos

+ adição
- subtração
* multiplicação
/ Divisão
** Exponenciação
% Modulo
++ incrementar
-- Decrementar

*/

let i = 1;
// se usar o ++ antes da variavel. incrementa primeiro e depois mostra
// se usar depois ele mostra depois incrementa
console.log(i++); 
console.log(++i);
console.log(i);


/* OPERADORES Atribuição

= 
+= adição
-= subtração
*= multiplicação
/= Divisão
**= Exponenciação
%= Modulo

*/

i += 3;
console.log(i);

/* OPERADORES Comparativos

> maior que 
< menor que 
== igual a
<= menor/igual a
>= maior/igual
!= Não igual a
|| ou
&& E (and)
! Não
=== igual identico -- ve o valor e o tipo da variavel
!== Diferente de identico

*/

let str = '12';
let int = 12;

console.log(str !== int);

let val = 0;

console.log(val !== false);

//
for(let x = 0; x <= 2; x++){
    console.log(senac.professores[x]);
};

//forEche

senac.professores.forEach(function(val, ind){
    console.log(`ID: ${ind} Nome: ${val}`);
});

