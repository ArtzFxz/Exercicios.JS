// FOR
// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let num = parseInt(prompt("Informe um número de 1 a 10"))

if (num >= 1 && num <= 10) {
    console.log("Tabuada do " + num + ":\n")
    for (i = 1; i <= 10; i++) {
        r = num * i
        console.log(num + "x" + i + " = " + r)

    }
}

else {
    alert("é necessário informar um número de 1 a 10!")
}