/* let vs var */

let nombre = "Jesus";

if (3 > 1) {
  let nombre = "Maria";
  console.log(nombre);
}

console.log(nombre);

/* String templates */
let apellido = "Perez";
let edad = 32;

console.log("Hola " + apellido + ", tienes " + edad + " anios.");
console.log(`Hola ${apellido}, tienes ${edad} anios.`);
