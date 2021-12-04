export { };
// [1, 'user']
let user: [number, string];
user = [1, 'Jose'];
console.log('user', user);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro

let userInfo: [number, string, boolean];
userInfo = [2, 'jose', true];
console.log('usersInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'jose']);
array.push([2, 'Maria']);
array.push([3, 'Ana']);
// array.push([3, 'Ana', true]) //Error;
console.log("array", array);

// Uso de funciones Array
// Jose -> JOsue

array[0][1] = "Josue";

console.log("array", array);
