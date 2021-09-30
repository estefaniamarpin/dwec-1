if (navegador=='Edge'){
    alert('¡Tienes Edge!');
} else if (navegador=='Opera'||navegador=='Chrome'||navegador=='Firefox'||navegador=='Safari'){
    alert('¡Esperamos que esta página se vea bien!');
} else {
    alert('Está bien, soportamos estos navergadorws también');
}

let a = +prompt('a?', '');
switch (a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}