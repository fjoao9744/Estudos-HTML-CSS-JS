let button = document.getElementById("b")

button.addEventListener("click", () => {
    let el = document.createElement("p")
    el.textContent = "smogon"
    document.body.appendChild(el)
})
