// WHILE
// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let idade = 1

    while (idade < 18 || isNaN (idade)){
        idade = parseInt (prompt("Informe sua idade: "))
        if(isNaN(idade) == false && idade >= 0 && idade < 18) {
            console.log("Você é menor de 18 anos!")
        }

        else if (isNaN(idade)){
        console.log("É necessário informar um número inteiro positivo!!")

        }
    }

    console.log("Você é maior de idade, sua entrada está liberada!")

