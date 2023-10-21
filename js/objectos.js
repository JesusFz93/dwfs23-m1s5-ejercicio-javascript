// const persona = {
//   nombre: "Roberto",
//   apellidoPaterno: "Gonzalez",
//   edad: 27,
// };

// localStorage.setItem("usuario", JSON.stringify(persona));

// const personaRecuperadad = localStorage.getItem("usuario");
// console.log(JSON.parse(personaRecuperadad));

// console.log(persona);
// Imprimir una propiedad de un objeto
// console.log(persona.nombre);
// console.log(persona["nombre"]);

// Cambiamos el valor de una propiedad de un objeto
// persona.edad = 37;

// Agregar una propiedad que no existe
// persona.activo = true;

// console.log(persona);

// const resp = {
//   msg: "Todo bien",
//   ok: true,
//   data: "Jorge",
// };

// console.log(resp);

// const respConvertida = JSON.stringify(resp);

// console.log(respConvertida);

// const respRecibida = JSON.parse(respConvertida);

// console.log(respRecibida);

// Ejercicio 1
// const persona = {
//   nombre: "Roberto",
//   apellidoPaterno: "Gonzalez",
//   edad: 27,
// };

// console.log(persona);

// const agregarAtributo = (clave, valor) => {
//   persona[clave] = valor;
// };

// agregarAtributo("tel", 345345);
// agregarAtributo("peso", "45kg");

// console.log(persona);

// DESESTRUCTURACION
// const persona = {
//   nombre: "Roberto",
//   apellidoPaterno: "Gonzalez",
//   edad: 27,
// };

// const { nombre, apellidoPaterno, edad } = persona;

// console.log(nombre);
// console.log(apellidoPaterno);
// console.log(edad);

// let personaNombre = persona.nombre;
// let personaApellidoPaterno = persona.apellidoPaterno;

// console.log(personaNombre);
// console.log(personaApellidoPaterno);

// Ejercicio express
// const objeto = {
//   estrellas: 34,
//   calle: "Doctores",
//   numeros: [1, 4, 7],
//   mensaje: "Informacion obtenida",
// };

// const { mensaje: msg } = objeto;

// // console.log(msg);

// const hobbies = ["Nadar", "Pescar", "Futbol"];
// console.log(hobbies);

// const [hobby, sdadsasd, hobbyFavorito] = hobbies;

// console.log(hobbyFavorito);

// const hobbieFavorito = hobbies[1];
// console.log(hobbieFavorito);

// Ejercicio 2
// const persona = {
//   nombre: "Roberto",
//   apellidoPaterno: "Gonzalez",
//   edad: 27,
// };

// console.log(persona);

// const agregarAtributo = (clave, valor) => {
//   if (persona[clave]) {
//     console.log("Esta propiedad ya existe");
//   } else {
//     persona[clave] = valor;
//   }
// };

// agregarAtributo("nombre", "Javier");

// console.log(persona);

// Ejercicio 3
const libros = [];

const agregarLibro = (nombreLibro, autorLibro) => {
  const libro = {
    nombre: nombreLibro,
    autor: autorLibro,
  };

  libros.push(libro);
};

const imprimirLibros = () => {
  console.log(libros);
};

// agregarLibro("El Quijote", "Cervantes");
// agregarLibro("Odisea", "Homero");
// imprimirLibros();
