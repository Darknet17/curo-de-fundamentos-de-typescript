"use strict";
function hello({ name: string = "" }) {
    return `Hello ${name}`;
}
console.log(hello({ name: "Luis Josue Santana Perez" }));
