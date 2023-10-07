// Comentario

/* 
Comentario
Comentario
Comentario
*/

// Variables y Constantes
// let nombre = "Juan";
// let apellido = "Gonzalez";
// let ciudadResidencia = "Monterrey";
// let estadoCivil = "Soltero";
// let edad = 50;
// let estaVivo = true;

// const nombre = "Ana";
// const apellido = "Gonzalez";
// const ciudadResidencia = "Monterrey";
// const estadoCivil = "Soltero";
// const edad = 32;
// const estaVivo = true;

// console.log("El nombre es " + nombre);
// console.log("El apellido es " + apellido);
// console.log(nombre + " " + apellido + " " + ciudadResidencia);
// console.log(
//   "Mi nombre es: " + nombre + " " + apellido + " y soy de: " + ciudadResidencia
// );

// console.log(
//   `Mi nombre es: ${nombre} ${apellido} y soy de: ${ciudadResidencia}`
// );

// let nombre = "Jorge";
// let apellido = "Mendoza";

// let nombreCompleto = nombre + ' ' + apellido;
// let nombreCompleto = `${nombre} ${apellido}`;

// Ejercicio 1 - Variables
// let nombre = "Jesus";
// let apellido = "Fernandez";
// let edad = 30;
// let soltero = true;
// let fechaNacimiento = "1993-01-22";

// console.log("Hola " + nombre + " " + apellido);
// console.log("Tienes " + edad + " años");
// console.log("Tu fecha de nacimiento es " + fechaNacimiento);
// console.log("¿Estás soltero? " + soltero);

// Coercion de datos
// let numero1 = 50;
// let numero2 = "60";

// console.log(numero1 + Number(numero2));

// Ejercicio 2 - Coercion
// let num1 = "10";
// let num2 = 5;
// let suma = Number(num1) + num2;
// console.log(suma);

// Operadores aritmeticos
// let division = 12 / 3;
// let residuo = 12 % 3;

// console.log(division);
// console.log(residuo);

//Ejercicio3 - Operadores logicos
// let num1 = 10;
// let num2 = 5;

// let suma = num1 + num2;
// let resta = num1 - num2;
// let multiplicacion = num1 * num2;
// let division = num1 / num2;
// let residuo = num1 % num2;

// console.log("Suma: " + suma);
// console.log("Resta: " + resta);
// console.log("Multiplicación: " + multiplicacion);
// console.log("División: " + division);
// console.log("Residuo: " + residuo);

// Operadores logicos
// let numero1 = 5;
// let numero2 = 10;
// let numero3 = 6;
// let numero4 = 2;

// console.log(numero1 >= numero2);
// console.log(numero3 > numero4);
// console.log(numero2 > numero4);
// console.log(numero4 < numero2);
// console.log(
//   numero1 >= numero2 ||
//     numero3 > numero4 ||
//     numero2 > numero4 ||
//     numero4 < numero2
// );

// let estado = "A";

// if (estado === "A") {
//   console.log("Si tienes permiso");
// } else {
//   console.log("No tienes permiso");
// }

// Verdad y Falsedad

// let usuario = "";

// if (usuario) {
//   console.log("Esto es verdadero");
// } else {
//   console.log("Esto es falso");
// }

// CONDICIONALES = IF
// let edad = 18;

// if (edad >= 18) {
//   console.log("Eres un adulto");
// } else if (edad >= 12) {
//   console.log("Eres un adolecente");
// } else {
//   console.log("Eres un menor de edad");
// }

// let edad = 5;

// switch (edad) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//     console.log("Eres un menor de edad");
//     break;
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//     console.log("Eres un adolecente");
//     break;
//   default:
//     console.log("Eres un adulto");
//     break;
// }

// CONDICIONALES = Switch
// let opcion = "apagar_tele";

// switch (opcion) {
//   case "bajar_volumen":
//     console.log("El usuario esta bajando el volumen");
//     break;
//   case "subir_volumen":
//     console.log("El usuario esta subiendo el volumen");
//     break;
//   case "apagar_tele":
//     console.log("Apagando televisor...");
//     break;
//   default:
//     console.log("No se ha seleccionado una opcion valida");
//     break;
// }

// Ciclo For
// for (let i = 0; i <= 10; i++) {
//   console.log(`valor de i: ${i}`);
// }

// let j = 1;
// while (j <= 5) {
//   console.log(`valor de j: ${j}`);
//   j++;
// }

// Funciones

// function saludar() {
//   console.log("Hola mundo");
// }

// const saludar = () => {
//   console.log("Hola mundo");
// };

// saludar();

// const saludarNombre = (nombre, apellido, edad) => {
//   console.log(`Saludos ${nombre} ${apellido}, tienes ${edad} anios`);
// };

// saludarNombre("Jesus", "Fernandez", 30);

// const sumatoria = (numero1, numero2) => {
//   let resultado = numero1 + numero2;
//   return resultado;
// };

// let respuesta = sumatoria(10, 5);
// console.log(respuesta);

// let respuesta2 = sumatoria(78, 34);
// console.log(respuesta2);

// Ejercicio funciones
const numerosPares = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i * 2);
  }
};

numerosPares(12);
