function id_() {
    let el = document.getElementById("id_tag");
    console.log(el);
    el.innerHTML = "Texto trocado pelo id";
}

function classe() {
    let el = document.getElementsByClassName("class_tag"); // HTML Collection
    let arr = [...el] // melhor converter para array

    console.log(arr)
    arr[0].innerHTML = "Texto trocado pela classe"

}

function tag_() {
    let el = document.getElementsByTagName("p"); // HTML Collection
    console.log(el)
    el[2].innerHTML = "Texto trocado pela tag"
}

function query() {
    let el = document.querySelector("#query_tag") // tem que colocar o # ou .
    console.log(el)
    el.innerHTML = "Texto trocado pelo querySelector"
}

function queryAll() {
    let el = document.querySelectorAll("#queryall_tag") // tambem da pra converter pra arr
    console.log(el)

    el.forEach((event) => { // forEach funciona
        event.innerHTML = "Texto trocado pelo querySelectorAll"
    })

}