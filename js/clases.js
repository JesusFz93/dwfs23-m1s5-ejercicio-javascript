// Clase simple
class Persona {
  constructor(nombre, edad, apellido) {
    this.nombre = nombre;
    this.edad = edad;
    this.apellido = apellido;
  }

  saludar() {
    console.log(
      `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`
    );
  }

  comer() {
    console.log("");
  }
}

const persona1 = new Persona("Roberto", 30, "Jimenez");
// persona1.saludar();

const persona2 = new Persona("Maria", 25, "Gonzalez");
// persona2.saludar();

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new Rectangulo(10, 20);
const area = rectangulo1.calcularArea();
// console.log(area);

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  comer() {
    console.log(`${this.nombre} esta comiendo`);
  }
}

class Perro extends Animal {
  constructor(nombre, juguete) {
    super(nombre);
    this.juguete = juguete;
  }

  ladrar() {
    console.log(`${this.nombre} esta ladrando`);
  }
}

class Gato extends Animal {
  constructor(nombre, juguete) {
    super(nombre);
    this.juguete = juguete;
  }

  maullar() {
    console.log(`${this.nombre} esta maullando`);
  }
}

const perro1 = new Perro("Firulais", "Pelota");
perro1.comer();
perro1.ladrar();

const gato = new Gato("Michi", "Bola de estambre");
gato.comer();
gato.maullar();
