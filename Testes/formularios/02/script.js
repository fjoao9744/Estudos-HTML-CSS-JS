const form = document.getElementById("Meuformulario"); // declara uma varivel que vai ser o formulario

form.addEventListener("submit", function(event) { // declara uma função que vai ser executada quando o evento submit for acionado

    const data = new FormData(form)

    console.log("Nome:", FormData.get("nome"))
    console.log("Email:", FormData.get("email"))
    console.log("Mensagem:", FormData.get("mensagem"))

});

