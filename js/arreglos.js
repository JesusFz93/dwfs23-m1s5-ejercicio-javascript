// const nombres = ["Martin", [[10, 345], "Roberta"], "Julieta"];
// console.log(nombres[1][0][0]);
// console.log(nombres.length);

// Modificar arreglos
// Push para agregar valores al final
// const frutas = ["mango", "pera", "sandia"];
// console.log(frutas);
// frutas.push("manzana");
// frutas.push("mandarina");
// console.log(frutas);

// Pop para eliminar valores al final
// const frutas = ["mango", "pera", "sandia"];
// console.log(frutas);
// frutas.pop();
// frutas.pop();
// console.log(frutas);

// Unshift para agregar valores al principio
// const frutas = ["mango", "pera", "sandia"];
// console.log(frutas);
// frutas.unshift("naranja");
// frutas.unshift("naranja");
// console.log(frutas);

// Shift para eliminar valores al principio
// const frutas = ["mango", "pera", "sandia"];
// console.log(frutas);
// frutas.shift();
// frutas.shift();
// console.log(frutas);

// Shift para eliminar valores al principio
// const frutas = ["mango", "pera", "sandia"];
// console.log(frutas);
/*frutas.splice(1, 1, "manzana");*/ // Actualizar un valor
/*frutas.splice(1, 1);*/ // eliminar un valor
// frutas.splice(2, 0, "naranja"); Con esto agregamos valores sin afectar a nadie
// console.log(frutas);

// ITERAR ARREGLOS
// Con for
// const frutas = ["mango", "pera", "sandia"];
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// Con forEach
// const frutas = ["mango", "pera", "sandia", "manzana"];
// console.log(frutas);
// frutas.forEach((fruta) => {
//   console.log(fruta);
// });

// const precios = [34, 78, 32, 1, 5];
// precios.forEach((precio) => {
//   let precioFinal = precio * 2;
//   console.log(precioFinal);
// });

// Con map
// const frutas = ["mango", "pera", "sandia", "manzana"];
// console.log(frutas);

// const ArregloNuevo = frutas.map((fruta) => {
//   return fruta.toUpperCase();
// });

// console.log(ArregloNuevo);

// const ArregloNuevo = [];

// frutas.forEach((fruta) => {
//   ArregloNuevo.push(fruta.toUpperCase());
// });

// console.log(ArregloNuevo);

// Con Filter
// const frutas = ["mango", "pera", "sandia", "manzana", "sandia"];
// console.log(frutas);

// const frutasEncontradas = frutas.filter((fruta) => {
//   return fruta == "sandia";
// });

// console.log(frutasEncontradas);

// const calificaciones = [60, 70, 80, 69, 100];
// console.log(calificaciones);

// const calificacionesAprobatorias = calificaciones.filter((calificacion) => {
//   return calificacion >= 70;
// });

// console.log(calificacionesAprobatorias);

// Con Find
// const frutas = ["mango", "pera", "sandia", "manzana", "sandia"];
// console.log(frutas);

// const frutaEcontrada = frutas.find((fruta) => {
//   return fruta == "sandia";
// });

// console.log(frutaEcontrada);

// const calificaciones = [60, 70, 80, 69, 100];
// console.log(calificaciones);

// const calificacionAprobatoria = calificaciones.find((calificacion) => {
//   return calificacion >= 75;
// });

// console.log(calificacionAprobatoria);

// const carrito = [10, 50, 10, 30];
// console.log(carrito);

// let comisionTC = 0;

// const totalAPagar = carrito.reduce((acumulado, precio) => {
//   return acumulado + precio;
// }, comisionTC);

// console.log(totalAPagar);

const calificaciones = [60, 80, 96, 68, 100];
console.log(calificaciones);

const sumCalificaciones = calificaciones.reduce((acumulado, calificacion) => {
  return acumulado + calificacion;
}, 0);

const promedio = sumCalificaciones / calificaciones.length;

console.log(promedio);
