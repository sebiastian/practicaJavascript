//Metodo Push

// let colores = ["Rojo", "Verde", "Azul"];
// console.log(colores);
// colores.push("Amarillo");
// console.log(colores);
// let otrosColores = ["negro"];
// otrosColores.unshift(colores);
// let nuevosColores = [];
// nuevosColores = otrosColores;
// console.log(nuevosColores);

// Desafio práctico
// Te invitamos a realizar los siguientes ejercicios que nos brindarán habilidades en la manipulación de arrays, strings y objetos. Dichos ejercicios requieren no solo conocimientos técnicos sino también desarrollo lógico, por lo que pondrán a prueba nuestros algoritmos. ¡Manos a la obra!
// Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()

let colores1 = ["blanco", "negro", "rojo"];
let colores2 = ["azul", "verde"];
let colores3 = ["verde"];

function unirArrays(array1, array2) {
  return array1.concat(array2);
}
let coloresNuevos = unirArrays(colores1, colores2);
console.log(coloresNuevos);

// Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. La función debe devolver el elemento eliminado

function eliminarPrimerElemento(array) {
  return array.shift();
}
let arrayPrimerElementoBorrado = eliminarPrimerElemento(colores1);
console.log(arrayPrimerElementoBorrado);
console.log(colores1);

// Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()

let letras = "OtraVezSeba";
function convertidorArray(array) {
  let arrayUpper = array.toUpperCase();
  let arrayLower = array.toLowerCase();
  console.log(arrayUpper);
  console.log(arrayLower);
}

convertidorArray(letras);
// Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. Llama nuevamente a la función creada para visualizar el cambio efectuado.

let persona = {
  nombre: "sebastian",
  edad: 35,
  ocupacion: "estudiante",
};

function verPersona(x) {
  console.log(`El nombre es ${x.nombre}`);
  console.log(`Su edad es ${x.edad}`);
  console.log(`Su ocupacion es ${x.ocupacion}`);
}
verPersona(persona);

persona.ocupacion = "Programador";
persona.habilidad = "Varias";

// Objetos anidados: Agrega una nueva propiedad al objeto creado en el ejercicio anterior llamada ‘ubicacion’, donde deberás guardar un objeto interno con las propiedades: codigoPostal, ciudad, calle y número. Luego, crea una función que reciba dicho objeto por parámetro y le permita al usuario eliminar solo una de las propiedades del objeto.

persona.ubicacion = {
  codigoPostal: 2000,
  ciudad: "Rosario",
  calle: "garay",
  numero: 138,
};

console.log(persona);

function borrarAtributo(objeto, propiedad) {
  switch (propiedad) {
    case "nombre":
      delete objeto.nombre;
      break;
    case "edad":
      delete objeto.edad;
      break;
    case "ocupacion":
      delete objeto.ocupacion;
      break;
    case "ubicacion":
      delete objeto.ubicacion;
      break;
    case "habilidad":
      delete objeto.habilidad;
      break;
  }

  console.log(objeto);
}

borrarAtributo(persona, "edad");
