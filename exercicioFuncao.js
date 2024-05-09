// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possivel executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário podera escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.

function imprimirImpar() {
    for(let num = 0; num <= 50; num++){
        if(num % 2 !== 0){
            console.log(num);
        }
    }
    
    console.log("--------------------------------")
    
    for(let i = 1; i <= 50; i += 2){
        console.log(i);
    }
}

function imprimirPares() {
    let num = 0;

console.log("Números pares de 0 a 20: ");

while(num <= 20){
    if(num % 2 == 0){
        console.log(num)
    }
    num ++;
}
}

function idade() {
    let idade = parseInt(prompt("Digite sua idade: "));

while(idade < 18){
    idade = parseInt(prompt("Você é menor de idade. Por favor, digite sua idade novamente: "))
}

console.log("Você é maior de idade. Sua idade é: " + idade);
}

function tabuada() {
    let numero = parseInt(prompt("Digite um número para ver na tabuada: "))

if(!isNaN(numero)){

    for(let num = 1; num <=10; num++){
        console.log(numero + " X " + num + " = " + (numero*num));
    }

}else{
    console.log("Número invalido. Por favor, digite um número válido.")
}


console.log(isNaN("Óla")) // retorna true 
console.log(isNaN(123)) // retorna false 

//invertendo
console.log(!isNaN("Óla")) // retorna false 
console.log(!isNaN(123)) // retorna true 
}


function sequenciaFibonacci() {
    let fib1 = 1;
let fib2 = 1;

console.log("Os primeiro 10 números da sequência de Fibonacci são: ")
console.log(fib1);
console.log(fib2);

for(let i = 2; i < 10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    fib1 = fib2;
    fib2 = nextFib;
}
}

function exemploRepeticao() {
    let opcao = prompt("Digite uma opção\nDigite 0 para sair:")

    while (opcao != "0") {
        console.log("Repetiuuuuuu");
    
        opcao = prompt("R:Digite uma opção\nDigite 0 para sair:")
    }
    
    console.log("Saiuuuuu");
}

let opcao = prompt("Escolha uma opção: \n1 - Exemplo Idade\n2 - Exemplo Repetição\n3 - Exemplo Sequência Fibonacci\n4 - Exemplo Tabuada\n5 - Exemplo Imprimir pares\n6 - Exemplo Imprimir Impares")

switch (opcao) {
    case "1":
        idade()
        break;

    case "2":
        exemploRepeticao()
        break;

    case "3":
        sequenciaFibonacci()
        break;

    case "4":
        tabuada()
        break;

    case "5":
        imprimirPares()
        break;

    case "6":
        imprimirImpar()
        break;
    
    default:
    break;
}