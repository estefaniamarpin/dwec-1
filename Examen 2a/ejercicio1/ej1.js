document.addEventListener("DOMContentLoaded", iniciar);
function iniciar() {
  let modulos = [];
  let codigo;
  let descripcion;
  let curso;
  let ciclo;
  let horas;

  let codigoErr = document.getElementById("codigoErr");
  let descripcionErr = document.getElementById("descripcionErr");
  let cursoErr = document.getElementById("cursoErr");
  let cicloErr = document.getElementById("cicloErr");
  let horasErr = document.getElementById("horasErr");
  let tabla = document.getElementById("datos");

  if (localStorage.getItem("modulos") != null) {
    modulos = localStorage.getItem("modulos");
    for (let modulo of modulos) {
      let tr = document.createElement("tr");
      for (const key in modulo) {
        let td = document.createElement("td");
        td.append(modulo[key]);
        tr.append(td);
      }
      datos.append(tr);
    }
  }

  let grabar = document.getElementById("grabarModulo");
  grabar.addEventListener("click", grabarModulo);

  let guardar = document.getElementById("guardar");
  guardar.addEventListener("click", guardarModulos);

  function grabarModulo(event) {
    event.preventDefault();
    codigo = document.getElementById("codigo").value;
    descripcion = document.getElementById("descripcion").value;
    curso = document.getElementById("curso").value;
    ciclo = document.getElementById("ciclo").value;
    horas = document.getElementById("horas").value;
    if (
      comprobarCodigo() &&
      comprobarDescripcion() &&
      comprobarCurso() &&
      comprobarCiclo() &&
      comprobarHoras()
    ) {
      let modulo = {
        codigo: codigo,
        descripcion: descripcion,
        curso: curso,
        codigoCiclo: ciclo,
        horas: horas,
      };
      modulos.push(modulo);
      let tr = document.createElement("tr");
      for (const key in modulo) {
        let td = document.createElement("td");
        td.append(modulo[key]);
        tr.append(td);
      }
      datos.append(tr);
    }
  }

  function comprobarCodigo() {
    let correcto = true;
    if (codigo != "") {
      let regexp = /^([0-9]|[a-z]|[A-Z]){4}$/;
      if (!regexp.test(codigo)) {
        error("codigo", "e");
        correcto = false;
      } else {
        codigoErr.innerHTML = "";
      }
    } else {
      error("codigo", "v");
      correcto = false;
    }
    return correcto;
  }

  function comprobarDescripcion() {
    let correcto = true;
    if (descripcion != "") {
      let regexp = /^([A-Z]|[a-z]){1,}$/;
      if (!regexp.test(descripcion)) {
        error("descripcion", "e");
        correcto = false;
      } else {
        descripcionErr.innerHTML = "";
      }
    } else {
      error("descripcion", "v");
      correcto = false;
    }
    return correcto;
  }

  function comprobarCurso() {
    let correcto = true;
    if (curso != "") {
      let regexp = /^1|2$/;
      if (!regexp.test(curso)) {
        error("curso", "e");
        correcto = false;
      } else {
        cursoErr.innerHTML = "";
      }
    } else {
      error("curso", "v");
      correcto = false;
    }
    return correcto;
  }

  function comprobarCiclo() {
    let correcto = true;
    if (ciclo != "") {
      let regexp = /^([0-9]|[a-z]|[A-Z]){4}$/;
      if (!regexp.test(ciclo)) {
        error("ciclo", "e");
        correcto = false;
      } else {
        cicloErr.innerHTML = "";
      }
    } else {
      error("ciclo", "v");
      correcto = false;
    }
    return correcto;
  }

  function comprobarHoras() {
    let correcto = true;
    if (horas != "") {
      let regexp = /^[1-9]|[0-9]{2,}$/;
      if (!regexp.test(horas)) {
        error("horas", "e");
        correcto = false;
      } else {
        horasErr.innerHTML = "";
      }
    } else {
      error("horas", "v");
      correcto = false;
    }
    return correcto;
  }

  function error(campo, tipo) {
    let error = "";
    switch (campo) {
      case "codigo":
        codigoErr.classList.add("rojo");
        if (tipo == "v") {
          error = "Campo obligatorio";
          codigoErr.textContent = error;
        } else if (tipo == "e") {
          error = "Formato no valido";
          codigoErr.textContent = error;
        }
        break;

      case "descripcion":
        descripcionErr.classList.add("rojo");
        if (tipo == "v") {
          error = "Campo obligatorio";
          descripcionErr.textContent = error;
        } else if (tipo == "e") {
          error = "Formato no valido";
          descripcionErr.textContent = error;
        }
        break;

      case "curso":
        cursoErr.classList.add("rojo");
        if (tipo == "v") {
          error = "Campo obligatorio";
          cursoErr.textContent = error;
        } else if (tipo == "e") {
          error = "Formato no valido";
          cursoErr.textContent = error;
        }
        break;

      case "ciclo":
        cicloErr.classList.add("rojo");
        if (tipo == "v") {
          error = "Campo obligatorio";
          cicloErr.textContent = error;
        } else if (tipo == "e") {
          error = "Formato no valido";
          cicloErr.textContent = error;
        }
        break;

      case "horas":
        horasErr.classList.add("rojo");
        if (tipo == "v") {
          error = "Campo obligatorio";
          horasErr.textContent = error;
        } else if (tipo == "e") {
          error = "Formato no valido";
          horasErr.textContent = error;
        }
        break;
    }
  }

  function guardarModulos(event) {
    event.preventDefault();
    localStorage.setItem("modulos", modulos);
  }
}
