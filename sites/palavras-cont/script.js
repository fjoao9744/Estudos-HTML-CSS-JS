let digitadas = {}

document.getElementById("palavras").addEventListener("keydown", (event) => {
    if (event.key === " ") {
        palavras = document.getElementById("palavras").value.split(" ")
        ultima_palavra = palavras[palavras.length - 1]

        digitadas[ultima_palavra] = (digitadas[ultima_palavra] || 0) + 1

        console.log(digitadas)
        att()
    }
})

function att() {
    div = document.getElementById("digitadas");
    div.innerHTML = "";

    for (let i = 0; i < Object.keys(digitadas).length; i++) {
        i1 = Object.keys(digitadas)[i];
        i2 = Object.values(digitadas)[i];

        item = document.createElement("p");
        item.innerText = `${i1} = ${i2}`;
    
        div.appendChild(item);

    }
}

