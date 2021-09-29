for (let i=2; i <= 10; i++){
    if (i % 2 == 0){
        alert(i);
    }
}

let i = 0;
while (i < 3){
    alert(`número ${i}!`);
    i++;
}

let num;
do{
    num = prompt('Ingrese un número');
} while (num<=100 && num);

