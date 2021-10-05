function suma(a, b){
    result = a + b;
    return result;
}

function resta(a, b){
    result = a - b;
    return result;
}

function multiplicacion(a, b){
    result = a * b;
    return result;
}

function division(a, b){
    result = a / b;
    return result;
}

function calcula(a, b, funcion){
    return funcion(a,b);
}

let resultado;
resultado = calcula(1, 2, suma);
alert(resultado);


let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
     () => alert("You agreed."),
     () => alert("You canceled the execution.")
  );