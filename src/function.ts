// Crear una Fotografia

// function createPicture(title, date, size) {
//     //title
// }
type SquareSize = '100x100' | '500x500' | '1000x1000';
// Usamos TS, definimos tipos para parametros
// function createPicture(title: string, date:string, size: SquareSize) {
//     console.log('create Picture using', title, date, size);
// }

// createPicture('My Birthday', '2021-12-3', '1000x1000');
// createPicture('My Birthday', '2021-12-3');

// parametros opciones en funciones
function createPicture(title?: string, date?:string, size?: SquareSize) {
    console.log('create Picture using', title, date, size);
}

// createPicture('My Birthday', '2021-12-3', '1000x1000');
// createPicture('My Birthday', '2021-12-3');
// createPicture('My Birthday');
// createPicture();

// Flat Array function
let createPic = (title: string, data: string, size: SquareSize): object => {
    return {
        title,
        data,
        size
    }
}

const picture = createPic('My Birthday', '2021-12-3', '1000x1000');
console.log('picture', picture);