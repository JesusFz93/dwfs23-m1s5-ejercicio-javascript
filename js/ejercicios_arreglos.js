/*
Crear un método que reciba un array de calificaciones 
y obtenga el promedio con el uso de los 
métodos de arrays. Si el promedio es mayor 
a 70 imprima que aprobó / si es menor, que no aprobó

promedio([70, 80, 80, 90, 60]) // Aprobado: 76.
promedio([70, 50, 75, 70, 60]) // No Aprobado: 65.
*/

// const promedio = (calificaciones) => {
//   const sumatoria = calificaciones.reduce((acumulado, calificacion) => {
//     return acumulado + calificacion;
//   });

//   const promedio = sumatoria / calificaciones.length;

//   if (promedio >= 70) {
//     console.log(`Aprobado: ${promedio}.`);
//   } else {
//     console.log(`No Aprobado: ${promedio}.`);
//   }
// };

// promedio([70, 80, 80, 90, 60]);
// promedio([70, 50, 75, 70, 60]);

/*
Ejercicio 2
Método que reciba un array e imprima en la consola cada uno de sus elementos.

imprimeArray([‘uno’, 2, null, 0]);
	uno
	2
	null
	0
*/

const imprimeArray = (arreglo) => {
  arreglo.forEach((elemento) => {
    console.log(elemento);
  });
};

imprimeArray(["uno", 2, null, 0]);
