// NOME
// let nome = "Felipe"
// let nome1 = "Thiago"

// APELIDO
// let apelido = "Polegato"
// let apelido1 = "Thigas"



let pessoa1 = {
    nome: "Felipe",
    apelido: "Polegato"
}

let pessoa2 = {
    nome: "Thiago",
    apelido: "Thigas"
}


let produto = {
    nomeProduto: "Tônico Capilar",
    marca: "Manual",
    descricao: "Acabe com a calvice",
    preco: 29.90
}

// Concatenação
console.log(produto.preco + " " + produto.descricao);

console.log("Olá Thiago, acabe com a calvice, utilizando a Manual")


// Interpolação ( Template Strings )
console.log(`Olá ${pessoa1.nome}, ${produto.descricao}, utilizando a ${produto.marca}`)


let produtoCadastrado = {
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt("Digite o nome do produto: ")
produtoCadastrado.valor = parseFloat(prompt("Digite o valor do produto: "))
produtoCadastrado.marca = prompt("Digite a marca do produto: ")

console.log(produtoCadastrado);