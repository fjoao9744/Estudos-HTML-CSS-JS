
let janela = document.getElementById("janela")
let point = document.getElementsByTagName("h1")[0]
let width = parseFloat(getComputedStyle(janela).width)
let height = parseFloat(getComputedStyle(janela).height)

console.log()

class Button {
    constructor() {
        let el = document.createElement("button");
        el.textContent = "click!";
        el.addEventListener("click", () => {
            point.textContent = String(parseInt(point.textContent) + 1);
            el.style.display = "none";
        })

        el.style.position = "absolute";

        let positionX = String(Math.floor(Math.random() * parseInt(width)));
        el.style.top = `${positionX}px`;
        let positionY = String(Math.floor(Math.random() * parseInt(height)));
        el.style.left = `${positionY}px`;
        el.classList.add("animar")
        janela.appendChild(el);
    }
}

let num = 1000;

setInterval(() => {
    new Button();
}, num);


