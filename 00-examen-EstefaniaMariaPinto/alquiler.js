document.addEventListener("DOMContentLoaded", iniciar);

function iniciar(){
    let tablaNoAlq = document.getElementById("noAlquilados");//ej1
    let tablaAlq = document.getElementById("alquilados");//ej2
    tablaNoAlq.addEventListener("click", seleccionarNoAlq);//ej3
    let confirmar = document.getElementById("confirmar");
    confirmar.addEventListener("dblclick", confirmarAlquiler);
    tablaAlq.addEventListener("click", seleccionarAlq);//ej5

    cargarNoAlquilados();
    cargarAlquilados();

    async function cargarNoAlquilados(){
        let fichero = "noAlquilados.json";
        let respuesta = await fetch(fichero);
        if (respuesta.ok) {
            try {
                json = await respuesta.json();
                let noAlquilados = json;
                crearTablaNoAlq();
                for (let coche of noAlquilados){
                    let tr = document.createElement("tr");
                    let tdCod = document.createElement("td");
                    let tdMar = document.createElement("td");
                    let tdAlq = document.createElement("td");
                    let botonAlquilar = document.createElement("button");
                    botonAlquilar.value = "alquilar";
                    botonAlquilar.textContent = "Alquilar";
                    botonAlquilar.disabled = true;
                    botonAlquilar.addEventListener("click", alquilar);//ej4
                    tdCod.textContent = coche.codigo;
                    tdMar.textContent = coche.marca;
                    tdAlq.append(botonAlquilar);
                    tr.append(tdCod);
                    tr.append(tdMar);
                    tr.append(tdAlq);
                    tablaNoAlq.append(tr);
                }
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert(
                "Error " +
                respuesta.status +
                " al intentar acceder al fichero " +
                fichero
            );
        }
    }

    async function cargarAlquilados(){
        let fichero = "alquilados.json";
        let respuesta = await fetch(fichero);
        if (respuesta.ok) {
            try {
                json = await respuesta.json();
                let siAlquilados = json;
                crearTablaAlq();
                for (let coche of siAlquilados.alquilados){
                    let tr = document.createElement("tr");
                    let tdCod = document.createElement("td");
                    let tdMar = document.createElement("td");
                    let tdNIF = document.createElement("td");
                    let tdAnular = document.createElement("td");
                    let botonAnular = document.createElement("button");
                    botonAnular.value = "anular";
                    botonAnular.textContent = "Anular";
                    botonAnular.disabled = true;
                    tdCod.textContent = coche.codigo;
                    tdMar.textContent = coche.marca;
                    tdNIF.textContent = coche.NIF;
                    tdAnular.append(botonAnular);
                    tr.append(tdCod);
                    tr.append(tdMar);
                    tr.append(tdNIF);
                    tr.append(tdAnular);
                    tablaAlq.append(tr);
                }
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert(
                "Error " +
                respuesta.status +
                " al intentar acceder al fichero " +
                fichero
            );
        }
    }

    function crearTablaNoAlq(){
        let titulos = document.createElement("tr");
        let thCod = document.createElement("th");
        let thMar = document.createElement("th");
        let thAlq = document.createElement("th");
        thCod.textContent = "CODIGO";
        thMar.textContent = "MARCA";
        thAlq.textContent = "ALQUILAR";
        titulos.append(thCod);
        titulos.append(thMar);
        titulos.append(thAlq);
        tablaNoAlq.append(titulos);
    }
    
    function crearTablaAlq(){
        let titulos = document.createElement("tr");
        let thCod = document.createElement("th");
        let thMar = document.createElement("th");
        let thNIF = document.createElement("th");
        thCod.textContent = "CODIGO";
        thMar.textContent = "MARCA";
        thNIF.textContent = "NIF";
        titulos.append(thCod);
        titulos.append(thMar);
        titulos.append(thNIF);
        tablaAlq.append(titulos);
    }

    function seleccionarNoAlq(e){
        let target = e.target;
        let botonAlquilar =  target.parentElement.childNodes[2].childNodes[0];
        let img = document.querySelector("#secNoAlquilados #foto img");
        let trs = document.querySelectorAll("#secNoAlquilados tr");
        for (let tr of trs){
            if(tr.classList.contains("seleccionada")){
                tr.classList.remove("seleccionada");
                tr.childNodes[2].childNodes[0].disabled = true;
            } 
        }
        target.parentElement.classList.add("seleccionada");
        botonAlquilar.disabled = false;
        img.src = `./img/${target.parentElement.childNodes[1].textContent}.jpg`;
    }
    
    function seleccionarAlq(e){
        let target = e.target;
        let botonAnular = target.parentElement.childNodes[3].childNodes[0];
        let img = document.querySelector("#secAquilados #foto img");
        let trs = document.querySelectorAll("#secAquilados tr");
        for (let tr of trs){
            if(tr.classList.contains("seleccionada")){
                tr.classList.remove("seleccionada");
                tr.childNodes[3].childNodes[0].disabled = true;
            } 
        }
        target.parentElement.classList.add("seleccionada");
        botonAnular.disabled = false;
        //img.src = `./img/${target.parentElement.parentElement.childNodes[1].textContent}.jpg`;
    }

    function alquilar(e){
        let target = e.target;
        let contentCodigo = target.parentElement.parentElement.childNodes[0].textContent;
        let contentMarca = target.parentElement.parentElement.childNodes[1].textContent;
        let div = document.getElementById("datosCompra");
        div.style.display = "contents";
        let codigo = document.getElementById("codigo");
        let marca = document.getElementById("marca");
        codigo.value = contentCodigo;
        marca.value = contentMarca;
    }

    function confirmarAlquiler(){
        let nif = document.getElementById("nif");
        let expNIF = /^\d{8}[A-Z|a-z]$/;
        if (expNIF.test(nif)){
            let resp = confirm("¿Está seguro de que quiere alquilar este coche?");
            if(resp){

            }
        } else {
            alert("NIF no válido");
            return;
        }
        let div = document.getElementById("datosCompra");
        div.style.display = "none";
    }
}