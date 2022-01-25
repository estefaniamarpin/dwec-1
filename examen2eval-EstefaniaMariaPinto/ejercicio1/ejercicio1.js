//1
let h1 = document.createElement("h1");
h1.textContent = "Estefanía María";
document.body.append(h1);
h1.style.textAlign = "center";

//2
let botonBorrar = document.getElementById("borrarItem");
botonBorrar.addEventListener("click", eliminarItem);
function eliminarItem(e){
    let itemBorrar = prompt("Texto del item a borrar:");
    let labels = document.querySelectorAll("label");
    for (let label of labels){
        if (itemBorrar == label.textContent){
            let liBorrar = label.parentElement;
            liBorrar.remove();
            alert("Item borrado correctamente.");
            return;
        } 
    alert("El item solicitado no existe.");
    }
}

//3
let botonInsertar = document.getElementById("insertarItem");
botonInsertar.addEventListener("click", insertarItem);
function insertarItem(e){
    let itemPrincipal = prompt("Texto del item principal donde insertar nuevo item:");
    let labels = document.querySelectorAll("label");
    for (let label of labels){
        if (itemPrincipal == label.textContent){
            let pos = prompt("Posición(primer/ult):");
            let contenido = prompt("Texto del nuevo item:");
            let nuevoItem = document.createElement("li");
            nuevoItem.textContent = contenido;
            nuevoItem.classList.add("nuevo");
            if (pos == "primer"){
                let ulLabel = label.parentElement.querySelector("ul");
                ulLabel.prepend(nuevoItem);
                alert("Item añadido correctamente al principio.");
                return;
            } else if (pos == "ult"){
                let ulLabel = label.parentElement.querySelector("ul");
                ulLabel.append(nuevoItem);
                alert("Item añadido correctamente al final.");
                return;
            } else alert("Posición no válida.");
        } 
    }
alert("El item principal solicitado no existe.")
}