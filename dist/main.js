"use strict";
console.log("Hola Typescript!");
// Tipo: Number
// Explicito
let phone;
phone = 1;
phone = 1234567890;
// phone = "Hola"; // Error
// Inferido
let phoneNumber = 1234567890;
phoneNumber = 123;
// phone = true; // Error por tipo de dato
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error
// Tipo: String
let username = "Luis Josue";
username = "Luis Jose";
// username = true; // Error por el tipo de dato
// Template String
// Uso de Back-Tick `
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Santana'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log(userInfo);
