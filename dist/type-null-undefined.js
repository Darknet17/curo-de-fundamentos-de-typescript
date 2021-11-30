"use strict";
// Explicita
let nullVariable;
nullVariable = null;
// nullVariable = 1; // Error!
let otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
// Undefined
let undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
let otherUndefinedVariable = undefined;
otherUndefinedVariable = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);
// Null y undefinend: como subtipos
// --strictNullChecks
let albumName;
//albumName = null;
//albumName = undefined;
