console.log("************** DELIVERABLE 04 *********************");

console.log("************** 4. Read Books **************");
//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano.En caso de no existir el libro devolver false
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
//Ejemplo
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
function isBookReadFunction(books, titleToSearch) {
  var book = books.find((element) => {
    return element.title === titleToSearch;
  });
  return book ? book.isRead : "No existe el libro";
}
console.log(isBookReadFunction(books, "Devastación")); // true
console.log(isBookReadFunction(books, "Canción de hielo y fuego")); // false
console.log(isBookReadFunction(books, "Los Pilares de la Tierra")); // false
//Opcional
//Utiliza Typescript para añadir los tipos adecuados.

let books2: {
  title: string;
  isRead: boolean;
}[];

books2 = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead2(books: Array<Object>, titleToSearch: String): boolean {
  var book = books.find((element) => {
    return element["title"] === titleToSearch;
  });
  return book ? book["isRead"] : "No existe el libro";
}
console.log(isBookRead2(books, "Devastación")); // true
