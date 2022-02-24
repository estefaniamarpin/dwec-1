document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  let select = document.getElementById("modulos");
  let tabla = document.getElementById("tabla");
  let alumnos=[];

  cargarAlumnos();
  cargarModulos();
  select.addEventListener("change", insertarAlumnos);

  function cargarAlumnos() {
    let fichero = "./alumnos.json";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", fichero);

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        alumnos = xhr.response;
      }
    };
    xhr.onerror = function () {
      alert(`Error de red`);
    };
  }

  function insertarAlumnos() {
    let anul = document.createElement("button");
    anul.value = "anul";
    anul.textContent = "Anular matricula";
    let ver = document.createElement("button"); //se tiene que hacer en cada tr un button nuevo
    ver.value = "ver";
    ver.textContent = "Ver datos";
    cargarTabla();
    for (let alumno of alumnos) {
      if (alumno.modulo == select.value) {
        let tr = document.createElement("tr");
        for (const key in alumno) {
          let td = document.createElement("td");
          td.append(alumno[key]);
          tr.append(td);
        }
        let tdb = document.createElement("td");
        let tdb2 = document.createElement("td");
        tdb.append(anul);
        tdb2.append(ver);
        tr.append(tdb);
        tr.append(tdb2);
        tabla.append(tr);
      }
    }
  }

  function cargarModulos() {
    let fichero = "./modulos.json";
    let xhr = new XMLHttpRequest();

    xhr.open("GET", fichero);

    xhr.responseType = "json";

    xhr.send();

    xhr.onload = function () {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        modulos = xhr.response;
        for (let modulo of modulos) {
          let option = document.createElement("option");
          option.value = modulo;
          option.textContent = modulo;
          select.append(option);
        }
        insertarAlumnos();
      }
    };
    xhr.onerror = function () {
      alert(`Error de red`);
    };
  }

  function cargarTabla() {
    tabla.innerHTML = "";
    let cabecera = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "NIF";
    let th2 = document.createElement("th");
    th2.textContent = "Nombre";
    let th3 = document.createElement("th");
    th3.textContent = "Curso";
    cabecera.append(th1);
    cabecera.append(th2);
    cabecera.append(th3);
    tabla.append(cabecera);
  }

  function anularMatricula(event) {
    let target=event.target.parentNode();
    let respuesta = confirm("¿Está seguro?");
    if (respuesta) {
      
    }
  }
}
