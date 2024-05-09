// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possivel executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário podera escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.


function exemploRepeticao() {
    let opcao = prompt("Digite uma opção\nDigite 0 para sair:")

    while (opcao != "0") {
        console.log("Repetiuuuuuu");
    
        opcao = prompt("R:Digite uma opção\nDigite 0 para sair:")
    }
    
    console.log("Saiuuuuu");
}

let opcao = prompt("Escolha uma opção: \n1 - Exemplo Hello World\n2 - Exemplo Repetição")

switch (opcao) {
    case "1":
        console.log("Hello World");
        break;

    case "2":
        exemploRepeticao()
        break;

    default:
    break;
}