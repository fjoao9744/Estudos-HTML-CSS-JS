const form = document.getElementById("Form"); // declara uma variavel que vai ser o formulario

form.addEventListener("submit", function(event) { // declara uma função que vai ser executada quando o evento submit for acionado

    const data = new FormData(event.target);
    
    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");
});

