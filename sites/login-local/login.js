const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form)

    localStorage.setItem('user', JSON.stringify({name: data.get("name"), email: data.get("email")}))

    window.location.href = "index.html";
})