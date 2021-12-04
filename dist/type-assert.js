"use strict";
// <> // Angle Bracket Syntax
let username;
username = 'josemaria';
// tenemos una cadena, Ts confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
console.log('message', message);
let usernameWithId = 'josemaria 1';
// como obtener el username?
username = usernameWithId.substr(0, 10);
console.log("username only", username);
// Sintaxis "as"
message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
let helloUser;
helloUser = 'Hello paparazzi';
username = helloUser.substr(6);
console.log('username', username);
