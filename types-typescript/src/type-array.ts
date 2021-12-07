// Corchete []

// Tipo Explicito
let users:string[];
users = ['jose', 'maria', 'dexter'];
// users = [1, true, 'test']; // Error

// Tipo Inferido
let otherUsers = ['jose', 'maria', 'dexter']
// otherUsers = [1, true, 'test']; // Error

//Array<TIPO>

let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores de un Array
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);

// Propiedades en Array
console.log("users.length", users.length);

// USo de funciones en Arrays
users.push('ana');
users.sort();
console.log('users', users);

