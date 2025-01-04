const form = document.getElementById("form")
let valores = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    data = new FormData(event.target);

    const values = document.getElementById("valores");

    let tag = document.createElement("p");
    let num = data.get("numero");
    tag.textContent = `O valor ${num} foi adicionado`;
    tag.setAttribute("id", "value");

    values.appendChild(tag);
    valores.push(Number(num));

    form.reset();
})

const AnaliseBtn = document.getElementById("finalisar").addEventListener("click", function(event) {
    const totalTag = document.getElementById("total");
    
    totalTag.innerHTML =`Ao todo, temos ${valores.length} numeros cadastrados`;
    
    const maiorTag = document.getElementById("maior");
    const menorTag = document.getElementById("menor");

    let maior = valores[0];
    let menor = valores[0];
    for (let numero of valores) {
        if (numero >= maior){
            maior = numero;
        }
        if (numero <= menor){
            menor = numero;
        }
    }

    maiorTag.innerHTML = ` O maior numero informado é ${maior}`;
    menorTag.innerHTML = ` O menor numero informado é ${menor}`;

    const ultimoTag = document.getElementById("ultimo");

    let ultimo = valores[valores.length - 1];

    ultimoTag.innerHTML = ` O ultimo valor adicionado foi ${ultimo}`;

    const somaTag = document.getElementById("soma");

    let soma = +0;

    for (let numero of valores) {
        soma += numero;
    }

    somaTag.innerHTML = ` A soma de todos os valores foi de ${soma}`;

    const mediaTag = document.getElementById("media");

    mediaTag.innerHTML = ` A média de todos os valores foi de ${soma / valores.length} `



})