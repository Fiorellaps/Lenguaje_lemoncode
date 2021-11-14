console.log("************** DELIVERABLE 01 *********************");
/** ************** 1. Array operations ************** */
console.log("************** 1. Array operations **************");
// ------ Head ------
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
console.log("Head exercise");
var head = function (array) {
  var [first, ...rest] = array;
  return first;
};
console.log(head([1, 2, 3]));
console.log(head(["Fio", 2, 3]));
console.log(head(["hola", "hello", "ciao"]));
// ------ Tail ------
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
console.log("Tail exercise");
var tail = function (array) {
  var [first, ...rest] = array;
  return rest;
};
console.log(tail([1, 2, 3]));
console.log(tail(["Fio", 2, 3]));
console.log(tail(["hola", "hello", "ciao"]));
// ------ Init ------
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último.
//Utiliza los métodos que ofrece Array.prototype.
console.log("Init exercise");
var init = function (array) {
  array.pop(array.length - 1);
  return array;
};
console.log(init([1, 2, 3]));
console.log(init(["Fio", 2, 3]));
console.log(init(["hola", "hello", "ciao"]));
// ------ Last ------
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
console.log("Last exercise");
var last = function (array) {
  return array[array.length - 1];
}; // Implementation here.
console.log(last([1, 2, 3]));
console.log(last(["hola", 2, 3]));
console.log(last(["hola", "hello", "ciao"]));
