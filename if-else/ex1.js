//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
//nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
//foi bem-sucedido ou não.

let username = prompt("Digite um nome de usuario: ")
let password = prompt("Digite a senha: ")

if (username == "admin" && password == "senha123") {
    console.log("Login bem sucedido");
} else {
    console.log("Você não tem permissão de acesso!")
}