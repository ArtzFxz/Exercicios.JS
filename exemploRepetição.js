
// for = Loop Contado
// While = Loop Condicional


// for( let contador = 0; contador < 5; contador++) {
//     prompt("Digite o nome de um aluno: ")
// }

//--------------------------

// let opcao = prompt("Digite uma opção\nDigite 0 para sair: ")

// while (opcao != "0") {
//     console.log("Repetiuuuu")
// }

// console.log("Saiuuuu")
//----------------------------


// let contador =0;
// while(contador <= 5){
//     console.log(contador);
//     contador+=1
// }

//----------------------------

// let contador = 0;
// do{
//     console.log(contador);
//     contador += 1
// }while (contador <= 5);

// ---------------------------

// let contador = 0;

// do {
//     let valor = prompt("Digite um número: ");
//     switch (valor){
//         case "1":
//             console.log("Você digitou o valor 1")
//             break;

//         case "2":
//             console.log("Você digitou o valor 2")
//             break;
        
//         case "3":
//             console.log("Você digitou o valor 3")
//             break;

//         default:
//             console.log("Valor Invalido")
//             break;
//     }
// } while(valor == "0")

// -----------------------

// ForEach (para cada) - percorrer a lista

let num = [1,2,3,4,5,6,7];

// num.forEach(elemento => {
//     console.log("Os números são: " + elemento)

// });

for(let elemento of num){
    console.log(elemento)
}