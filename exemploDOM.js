// document.body.innerHTML = "<h1>Teste H1</h1>"

// document.body.innerHTML += "<p>Outro Teste</p>"

// let paragrafo = document.getElementById("texto")
// paragrafo.style.color = "blue"

// let opcao = prompt("Escolha a cor do paragrafo\n1 - Verde\n2 - Vermelho")

// if (opcao == "1") {
//     paragrafo.style.color = "darkgreen"
// } else if(opcao == "2") {
//     paragrafo.style.cor = "red"
// } else {
//     window.alert("Opção invalida")
// }

let cliques = 0;

const somarCliques = () => {
    cliques++

    let spanCliques = document.getElementById("num-cliques")

    spanCliques.innerText = cliques
} 

let tituloNome = document.getElementById("titulo-nome")

console.log(tituloNome);

 const mudarNome = () => {
    tituloNome.innerText = "Felipe Polegato"

 }
 tituloNome.addEventListener("click", mudarNome)

//  document.addEventListener("DOMContentLoaded", () => alert("ALOUUUUUUUUU"))

function voltarPagina() {
    window.history.back()
}

function fecharPagina() {
    window.close()
}
