console.log("Tipos de Variables");
console.log("Tipos de Variables Primitivas");
let mensaje ="Hola como estas";
let edad =10;
let activo = true;
let vacio = null;
let x;  
console.log("Mensaje",mensaje,"tipo de variable",typeof mensaje);
console.log("Edad",edad,"tipo de variable",typeof edad);
console.log("Activo",activo,"tipo de variable",typeof activo);
console.log("Vacio",vacio,"tipo de variable",typeof vacio);
console.log("x",x,"tipo de variable",typeof x);


console.log("Tipos de Variables NO Primitivas");
const persona={
    nombre :"Jose",
    apellido :"Llulluna"
}
console.log("Apellido",persona.apellido,"tipo de variable",typeof persona);
persona.apellido='Cuichan';
console.log("Apellido",persona.apellido,"tipo de variable",typeof persona);

const frutas= ["peras","manzanas","piña"];
console.log("frutas",frutas,"tipo de variable",typeof frutas);
const hoy =new Date();
console.log("fecha actual",hoy,"tipo de variable",typeof hoy);

console.log("Expresiones Regulares");
const regex=/[a-z]+/;
console.log(regex.test("abc"))

console.log("CONVERSIONES");
a="10"; 
b = 5; 
multiplicacion = a * b;
console.log("a",a,"tipo de variable", typeof a)
console.log("b",b,"tipo de variable", typeof b)
console.log("Resultado de la multiplicacion",multiplicacion,"tipo de variable",typeof multiplicacion);


