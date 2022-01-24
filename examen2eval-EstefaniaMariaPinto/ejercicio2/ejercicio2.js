//1
let botonAñadir = document.getElementById("anadirLibro");
botonAñadir.addEventListener("click", añadir);
function añadir(e){
    let isbnPedido = prompt("Escriba el ISBN:");
    let trs = document.querySelectorAll("tr");
    for (let tr of trs){
        let isbn = tr.getElementsByClassName("isbn");
        if (isbn.textContent == isbnPedido){
            alert("El libro con este ISBN ya está en pantalla.");
        } else {

        }
    }
}
