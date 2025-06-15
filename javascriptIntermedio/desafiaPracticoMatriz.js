/* Desafio práctico
Te invitamos a realizar  los siguientes ejercicios que nos sumergirán en la gestión de proyectos a pequeña escala, brindándonos la oportunidad de simular situaciones reales. Estos ejercicios nos permitirán dominar la manipulación de matrices y la destreza en el uso de callbacks, dotándonos de habilidades aplicables en diversos escenarios y desafíos cotidianos.
Matrices
Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada. Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una semana específica. Recordemos que cada fila representa una semana. El número de semana deberá recibirse por parámetro.
Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. El número correspondiente al día deberá recibirse por parámetro. Recuerda que el número de día es determinado por las columnas.
Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. La función deberá retornar dicho valor.

*/

let matrizMensual = [
  [123.45, 156.78, 189.32, 201.56, 278.9, 310.12, 199.99],
  [134.67, 145.22, 167.89, 210.45, 290.33, 321.5, 184.76],
  [198.4, 156.9, 174.2, 200.1, 305.67, 389.99, 265.5],
  [150.0, 180.25, 199.95, 215.6, 260.35, 300.5, 170.85],
];

console.table(matrizMensual);

function gastosSemanal(array, semana) {
  let totalSemana = 0;
  for (let i = 0; i < array[semana].length; i++) {
    totalSemana += array[semana][i];
  }
  return totalSemana;
}

function gastosPorDias(array, dia) {
  let totaldia = 0;
  for (let i = 0; i < array.length; i++) {
    totaldia += array[i][dia];
  }
  console.log(totaldia);
  return totaldia;
}
gastosSemanal(matrizMensual, 2);
gastosPorDias(matrizMensual, 5);

function gastoTotalMes(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      total += array[i][j];
    }
  }
  console.log(`la suma total es : ${total}`);
}

gastoTotalMes(matrizMensual);

// Callbacks
// Gastos por semana:
// Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. Será obligatorio el uso de callbacks para esta función.

function arrayMensual(array, funcion) {
  let mesArray = [];
  for (let i = 0; i < 4; i++) {
    mesArray.push(funcion(array, i));
  }
  console.log(mesArray);
}
arrayMensual(matrizMensual, gastosSemanal);
