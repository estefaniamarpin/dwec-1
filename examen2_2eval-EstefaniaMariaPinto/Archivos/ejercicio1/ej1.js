document.addEventListener("DOMContentLoaded", cargar);

function cargar(){
    let arrayModulos = [];
    let todoCorrecto = false;

    let botonGrabar = document.getElementById("grabarModulo");
    let botonGuardar = document.getElementById("guardarDatos");

    let expCodigos = /^w{4}$/;
    let expDescripcion = /^[A-Z|a-z|\s]$/;
    let expCurso = /^[1-2]{1}$/;

    let form = document.forms[0]
    let codigo = form.elements.codigo;
    let descripcion = form.elements.descripcion;
    let curso = form.elements.curso;
    let codigoCiclo = form.elements.codigoCiclo;
    let horas = form.elements.horas;

    let codigoErr = form.elements.codigoErr;
    let descripcionErr = form.elements.descripcionErr;
    let cursoErr = form.elements.cursoErr;
    let codigoCicloErr = form.elements.codigoCicloErr;
    let horasErr = form.elements.horasErr;

    let spans = document.querySelectorAll("span");
    for (let span of spans){
        span.classList.add("rojo");
    }

    botonGrabar.onsubmit = function(e){
        if (expCodigos.test(codigo.value)){
            todoCorrecto = true;
        } else {
            error(codigoErr, "Escriba 4 carácteres alfanuméricos.");
            todoCorrecto = false;
        }
    }
    botonGrabar.onsubmit = function(e){
        if (expDescripcion.test(descripcion.value)){
            todoCorrecto = true;
        } else {
            error(descripcionErr, "Sólo se admiten letras y espacios.");
            todoCorrecto = false;
        }
    }
    botonGrabar.onsubmit = function(e){
        if (expCurso.test(curso.value)){
            todoCorrecto = true;
        } else {
            error(cursoErr, "Escriba 1 o 2.");
            todoCorrecto = false;
        }
    }
    botonGrabar.onsubmit = function(e){
        if (expCodigos.test(codigoCiclo.value)){
            todoCorrecto = true;
        } else {
            error(codigoCicloErr, "Escriba 4 carácteres alfanuméricos");
            todoCorrecto = false;
        }
    }
    botonGrabar.onsubmit = function(e){
        if (horas.value>0){
            todoCorrecto = true;
        } else {
            error(horasErr, "Sólo se admiten enteros mayores que 0.");
            todoCorrecto = false;
        }
    }

    if(todoCorrecto==true){
        let modulo = {
            codigo: codigo.value,
            descripcion: descripcion.value,
            curso: curso.value,
            codigoCiclo: codigoCiclo.value,
            horas: horas.value
        };
        arrayModulos.append(modulo);

        let table = document.createElement("table");

        let titulos = document.createElement("tr");

        let thCodigo = document.createElement("th");
        thCodigo.textContent = "Código";
        titulos.append(thCodigo);

        let thDescripcion = document.createElement("th");
        thDescripcion.textContent = "Descripción";
        titulos.append(thDescripcion);

        let thCurso = document.createElement("th");
        thCurso.textContent = "Curso";
        titulos.append(thCurso);
        
        let thCiclo = document.createElement("th");
        thCiclo.textContent = "Ciclo";
        titulos.append(thCiclo);
        
        let thHoras = document.createElement("th");
        thHoras.textContent = "Horas";
        titulos.append(thHoras);

        table.append(titulos);

        for (let objeto of arrayModulos){
            let tr = document.createElement("tr");

            let tdCodigo = document.createElement("td");
            tdCodigo.textContent = objeto.codigo;
            tr.append(tdCodigo);

            let tdDescripcion = document.createElement("td");
            tdDescripcion.textContent = objeto.descripcion;
            tr.append(tdDescripcion);

            let tdCurso = document.createElement("td");
            tdCurso.textContent = objeto.curso;
            tr.append(tdCurso);

            let tdCiclo = document.createElement("td");
            tdCiclo.textContent = objeto.codigoCiclo;
            tr.append(tdCiclo);
            
            let tdHoras = document.createElement("td");
            tdHoras.textContent = objeto.horas;
            tr.append(tdHoras);
            
            table.append(tr);
        }
        document.body.append(table);
    } else return;

    function error(pos, mensaje){
        let elem = document.getElementById(pos);
        elem.textContent = mensaje;
    }
}
