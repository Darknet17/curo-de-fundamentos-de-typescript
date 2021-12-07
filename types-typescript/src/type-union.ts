export {}
// 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// Buscar username dado un ID
// function getUserNameById(id: number | string) {
    // Logica de negocio, find the user
    // return 'jose';
// }
// getUserNameById('20');
// getUserNameById('10');

//Alias de Tipos: TS
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUserNameById(id: IdUser): Username {
    // Logica de negocio, find the user
    return 'jose';
}
getUserNameById('20');
getUserNameById(10);

// Tipos Literales
// 100 x 100, 500 x 500, 1000 x 1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; // Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
