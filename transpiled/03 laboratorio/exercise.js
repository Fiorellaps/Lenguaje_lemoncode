console.log("************** LABORATORIO *********************");
console.log("Use folder 03 laboratorio to practice with laboratorio exercises");
console.log("You can add new files as long as they are imported from index.ts");

/** ************** 2. Concat ************** */
console.log("************** 2. Concat **************");
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
var concat = function (a, b) {
  return __spreadArray(__spreadArray([], a, true), b, true);
};
console.log(concat([2, 3, 3], ["Hola", "Fio", "Adiós"]));
// ------- Opcional ------
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
var concatExtra = function () {
  var array = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }
  return [].concat.apply([], array);
};
console.log(concatExtra([2, 3, 3], ["Hola", "Fio", "Adiós"], [1, "uno"]));
/** ************** 3.  Clone Merge ************** */
console.log("************** 3. Clone Merge **************");
console.log("Clone");
// ---- Clone ----
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
  return __assign({}, source);
}
var persona = {
  nombre: "Fiorella",
  apellido: "Piriz",
  edad: 21,
};
console.log(clone(persona));
console.log("Merge");
// ---- Merge ----
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source,
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.
//Por ejemplo, dados estos 2 objetos:
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true, country: "FF" };
//el resultado de mezclar a sobre b sería:
// {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
//TIP: Puedes usar la función "clone" del apartado A.
function merge(source, target) {
  return __assign(__assign({}, target), source);
}
console.log(merge(a, b));
console.log("************** 4. Read Books **************");
console.log("Clone");
//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano.En caso de no existir el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
//Ejemplo
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
  var book = books.find(function (element) {
    return element.title === titleToSearch;
  });
  return book ? book.isRead : "No existe el libro";
}
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
//Opcional
//Utiliza Typescript para añadir los tipos adecuados.

console.log("************** 5. Slot Machine **************");
//El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
//Cada máquina tragaperras(instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
/*Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
*/
var SlothMachine = /** @class */ (function () {
  function SlothMachine() {}
  return SlothMachine;
})();
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
// 11:41
