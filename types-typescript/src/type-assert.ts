export {}
// <> // Angle Bracket Syntax
let username: any;
username = 'josemaria';

// tenemos una cadena, Ts confia en mi!
let message: string = (<string>username).length > 5?
                        `Welcome ${username}`:
                        'Username is too short';
console.log('message', message);

let usernameWithId: any = 'josemaria 1';
// como obtener el username?
username = (<string>usernameWithId).substr(0, 10);
console.log("username only", username);

// Sintaxis "as"
message = (username as string).length > 5?
    `Welcome ${username}`:
    'Username is too short';

let helloUser:any;
helloUser = 'Hello paparazzi';
username = (helloUser as string).substr(6);
console.log('username', username);

