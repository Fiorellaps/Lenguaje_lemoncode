console.log("************** DELIVERABLE 02 *********************");
/** ************** 2. Concat ************** */
console.log("************** 2. Concat **************");
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
var concat = function (a, b) {
  return [...a, ...b];
};
console.log(concat([2, 3, 3], ["Hola", "Fio", "Adiós"]));
// ------- Opcional ------
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
var concatExtra = function (...arrays) {
  var array = [];
  for (let i = 0; i < arrays.length; i++) {
    array = array.concat(...arrays[i]);
  }
  return array;
};
console.log(concatExtra([2, 3, 3], ["Hola", "Fio", "Adiós"], [1, "uno"]));
