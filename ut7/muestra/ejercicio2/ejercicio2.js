let libros = [
  {
    ISBN: "978-84-204-3571-8",
    TITULO: "Tiempos recios",
    AUTOR: "Mario Vargas Llosa",
    EDITORIAL: "Alfaguara",
    IMG: "tiemposRecios.jfif",
  },
  {
    ISBN: "978-84-204-3547-3",
    TITULO: "Sidi",
    AUTOR: "Arturo Pérez-Reverte",
    EDITORIAL: "Alfaguara",
    IMG: "sidi.jfif",
  },
  {
    ISBN: "978-84-17624-27-9",
    TITULO: "El último barco",
    AUTOR: "Domingo Villar",
    EDITORIAL: "Siruela",
    IMG: "barco.jfif",
  },
  {
    ISBN: "978-84-9199-137-3",
    TITULO: "Churchill",
    AUTOR: "Andrew Roberts",
    EDITORIAL: "Critica",
    IMG: "churchill.jfif",
  },
  {
    ISBN: "978-84-670-5701-0",
    TITULO: "Fracasologia",
    AUTOR: "María Elvira Roca Barea",
    EDITORIAL: "Espasa",
    IMG: "fracasologia.jfif",
  },
];

//1
//Insertar en la tabla el titulo, autor e isbn de los libros. 1pto
//Lo tenia mal porque incluia todo ehe
let tbody = document.querySelector("tbody");
for (let libro of libros) {
  let tr = document.createElement("tr");
  let titulo = document.createElement("td");
  let autor = document.createElement("td");
  let isbn = document.createElement("td");
  
  //Me tiré 30 minutos para hacer un for que lo hiciera pero al final lo hice a mano en los ultimos 2 minutos
  titulo.textContent = libro.TITULO;
  autor.textContent = libro.AUTOR;
  isbn.textContent = libro.ISBN;

  tr.append(titulo);
  tr.append(autor);
  tr.append(isbn);

  tbody.append(tr);
}

//2
//Click en fila la pone amarilla y deselecciona el resto.
//Ademas añade la imagen del libro seleccionado al html. 1pto
//la clase seleccionar es la que cambia el color
tbody.addEventListener("click", selecionar);
let trs = document.querySelectorAll("tr");
let img = document.querySelector("img");

function selecionar(event) {
  let target = event.target.closest("tr");
  let direc
  for (let tr of trs) {
    if (tr.classList.contains("seleccionar")) {
      tr.classList.remove("seleccionar");
    }
  }
  target.classList.add("seleccionar");

  for(let libro of libros){
    if(target.firstElementChild.textContent==libro.TITULO){
      //Con esto busco en el array el libro con el mismo titulo que el de la fila de la tabla para coger la imagen.
      //Esto lo tenia mal y lo he arreglado :,(
      direc = `./img/${libro.IMG}`;
    }
  }
  img.src = direc;
}

//3
//Eliminar la fila seleccionada. 1pto
let botonBorrar = document.getElementById("eliminarLibro");
botonBorrar.addEventListener("click", borrar);

function borrar(event) {
  let selec = false;
  for (let tr of trs) {
    if (tr.classList.contains("seleccionar")) {
      tr.classList.remove("seleccionar"); //Esto lo incluyo porque si no despues de borrar un tr ya no apareceria el mensaje de tr no seleccionado
      tr.remove();
      img.src = "";
      selec = true;
    }
  }
  if (!selec) {
    alert("No hay ningun libro seleccionado. Por favor seleccione uno");
  }
}
