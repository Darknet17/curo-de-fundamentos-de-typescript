// Type: object
let user: object;
user = {}; // Object
user = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
}

console.log('user', user);
// Object vs object(Clase Js vs Tipo TS)
const myObject = {
    id: 1,
    username: 'paparazzi',
    firstname: 'Pablo',
    isPro: true
};

const isInstance = myObject instanceof Object; // clase Object JavaScript
console.log('isInstance', isInstance)
console.log('user.name', myObject.username);
