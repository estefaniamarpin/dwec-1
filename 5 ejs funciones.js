//1
function checkAge(age){
    return (age > 18)? true : confirm('¿Tienes permiso de tus padres?');
}

function checkAge(age){
    return (age > 18) || confirm('¿Tienes permiso de tus padres?');
}

//2
function min(a,b){
    if(a<b){
        return a;
    } else {
        return b;
    } 
}