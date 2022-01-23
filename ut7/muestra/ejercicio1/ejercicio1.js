//1a
//Hacer un h3, añadirlo y ponerle estilos. 1pto
let h3 = document.createElement("h3");
h3.textContent = "Primer árbol";
document.body.prepend(h3);

h3.style.backgroundColor = "green";
h3.style.fontSize = "2em";
h3.style.textAlign = "center";

//1b
//Borrar la hoja selecionada. Si no existe error. 1pto
let botonBorrar=document.getElementById("botonBorrar");
botonBorrar.addEventListener("click",borrarHoja);

function borrarHoja(event) {
    let hojas=document.getElementsByClassName("hoja");
    let hojaBorrar=prompt("Indique que hoja desea borrar");
    let mensaje=`Error. No existe la hoja ${hojaBorrar}`;
    for (let hoja of hojas) {
        if (hoja.textContent==hojaBorrar) {
            hoja.remove();
            mensaje=`La hoja ${hojaBorrar} se ha borrado correctamente`;
        }
    }
    alert(mensaje);
}

//1c
//Insertar hoja en rama seleccionada. Indicar si al principio o al final.
//Hoja tiene que tener clase hoja. 2ptos
//Insertar hoja al inicio jode el codigo, creo que es culpa del prepend
let botonInsertar=document.getElementById("botonInsertar");
botonInsertar.addEventListener("click",insertarHoja);

function insertarHoja(event) {
    let ramas=document.getElementsByClassName("rama");
    let ramaInsertar=prompt("Indique la rama en la que desea insertar la hoja");
    let existe=false;
    let ramaSelecionada;
    for(let rama of ramas){
        if (rama.firstChild.data.trim()==ramaInsertar){ //Esto es para comprobar el nombre de la rama. Nos lo ha dado ella
            existe=true;
            ramaSelecionada=rama.firstElementChild;
        }
    }
    if(existe){
        let lugar=+prompt("Insertar como primera hoja (1) o como ultima hoja (2)");
        let textoHoja=prompt("Indique el texto de la hoja");
        let nuevaHoja=document.createElement("li");
        nuevaHoja.textContent=textoHoja;
        nuevaHoja.classList.add("hoja");
        switch (lugar) {
            case 1:
                ramaSelecionada.prepend(nuevaHoja);
                break;
             case 2:
                ramaSelecionada.append(nuevaHoja);
                 break;
            default:
                alert(`Error. ${lugar} no es una opción valida`);
                break;
        }
    }else{
        alert(`Error. No existe la rama ${ramaInsertar}`);
    }
}