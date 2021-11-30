// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('isUser', idUser);

// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
//otherId = true;
console.log('isUser', otherId);

let surprise: any = "hello typescript";
// surprise.sayHello(); // Error
const res = surprise.substring(6) // Error;
console.log('res', res);
