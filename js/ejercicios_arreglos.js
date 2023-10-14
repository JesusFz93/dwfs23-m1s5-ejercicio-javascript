/*
Crear un método que reciba un array de calificaciones 
y obtenga el promedio con el uso de los 
métodos de arrays. Si el promedio es mayor 
a 70 imprima que aprobó / si es menor, que no aprobó

promedio([70, 80, 80, 90, 60]) // Aprobado: 76.
promedio([70, 50, 75, 70, 60]) // No Aprobado: 65.
*/

const promedio = (calificaciones) => {
  const sumatoria = calificaciones.reduce((acumulado, calificacion) => {
    return acumulado + calificacion;
  });

  const promedio = sumatoria / calificaciones.length;

  if (promedio >= 70) {
    console.log(`Aprobado: ${promedio}.`);
  } else {
    console.log(`No Aprobado: ${promedio}.`);
  }
};

promedio([70, 80, 80, 90, 60]);
promedio([70, 50, 75, 70, 60]);
