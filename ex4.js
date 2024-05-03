

// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima,
// a média aritmética das notas e a mensagem de:
// APROVADO para média superior ou igual a 7,0 
// RECUPERAÇÃO para notas entre 5.0 e 7,0
// REPROVADO para média inferior a 5,0.

let n1 = parseFloat(prompt("Digite a primeira nota de 1 à 10: "))
let n2 = parseFloat(prompt("Digite a segunda nota de 1 à 10: "))
let n3 = parseFloat(prompt("Digite a terceira nota de 1 à 10: "))
let n4 = parseFloat(prompt("Digite a quarta nota de 1 à 10: "))

let notaAluno = (n1 + n2 + n3 + n4) / 4

console.log(notaAluno)

if (notaAluno >= 7) {
    console.log("APROVADO!!")
}
else if(notaAluno >= 5) {
    console.log("RECUPERAÇÃO!!")
}
else{
    console.log("REPROVADO!!")
}