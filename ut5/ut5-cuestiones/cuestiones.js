//1
class Rectangulo{
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

//2
class Rectangulo{
    constructor (alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    area() {
        return this.ancho*this.alto;
    }
}
    //con propiedad de acceso
    class Rectangulo {
        constructor (alto, ancho){
            this.alto = alto;
            this.ancho = ancho;
        }
    
        get area() {
            return this.ancho*this.alto;
        }
    }

    r = new Rectangulo(5,3);
    r.area;


//3
class Punto {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }

    set x(value) {
        this._x = value;
    }
    set y(value) {
        this._y = value;
    }
}
let p1 = new Punto(5,7);

//4
class Animal {
    hablar(){
        alert("Rrrrr");
    }
}
  

class Gato extends Animal{
    hablar(){
        super.hablar();
        alert("miau");
    }
}
let gato = new Gato;
gato.hablar();
