let div = document.querySelector("#janela")

function criar() {
    let el = document.createElement("p")
    el.innerHTML = "Adicionado"
    el.setAttribute("id", "criado")
    div.appendChild(el)
}