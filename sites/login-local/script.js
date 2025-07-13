document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("user")
    window.location.reload()
})

if (!localStorage.getItem("user")) {
    window.location.href = "login.html"
} else {
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    document.getElementById("name_login").innerHTML = user.name
    document.getElementById("email_login").innerHTML = user.email

}