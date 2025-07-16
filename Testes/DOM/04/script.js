function innertext() {
    let el = document.getElementsByTagName("p")
    el[0].innerText = "Trocado pelo innerText" // lento e pega só o text
}

function textC() {
    let el = document.getElementsByTagName("p")
    el[0].textContent = "Trocado pelo TextContent" // rapido e pega todo o text(inclusive escondido com css)
}

function innerhtml() {
    let el = document.getElementsByTagName("p")

    el[0].innerHTML = "Trocado pelo innerHTML" // troca até a tag
}

