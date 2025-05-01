console.log("Tipos de Variables");
console.log("Tipos de Variables Primitivas");
let nombre = "Maria";
let edad = 25;
let esActivo = true;
let vacio = undefined;
let z;
console.log("Nombre", nombre, "tipo de variable", typeof nombre);
console.log("Edad", edad, "tipo de variable", typeof edad);
console.log("Es activo", esActivo, "tipo de variable", typeof esActivo);
console.log("Vacio", vacio, "tipo de variable", typeof vacio);
console.log("z", z, "tipo de variable", typeof z);

console.log("Tipos de Variables NO Primitivas");
const usuario = {
    nombre: "Luis",
    edad: 30
};
console.log("Nombre del usuario", usuario.nombre, "tipo de variable", typeof usuario);
usuario.nombre = "Carlos";
console.log("Nuevo nombre", usuario.nombre, "tipo de variable", typeof usuario);

const numeros = [1, 2, 3, 4, 5];
console.log("Numeros", numeros, "tipo de variable", typeof numeros);
const fechaHora = new Date();
console.log("Fecha y hora actual", fechaHora, "tipo de variable", typeof fechaHora);

console.log("Expresiones Regulares");
const regex = /\d+/;
console.log(regex.test("123"));

console.log("CONVERSIONES");
let str = "5";
let num = 8;
let suma = parseInt(str) + num;
console.log("str", str, "tipo de variable", typeof str);
console.log("num", num, "tipo de variable", typeof num);
console.log("Resultado de la suma", suma, "tipo de variable", typeof suma);

//  for in 
const persona2 = {
    nombre: "Pedro", 
    apellido: "Lopez", 
    edad: 30,
    direccion: "Calle 10 de Agosto",
    telefono: "098888888"
}

console.log("Nombre", persona2["nombre"]);
console.log("Apellido", persona2["apellido"]);
console.log("Edad", persona2["edad"]);

console.log("Ciclo For In");
for(const clave in persona2){
    console.log(clave, ":", persona2[clave]);
}

console.log("PRODUCTO");
const producto1= {
    nombre: "Telefono",
    precio: "$500",
    descripcion: "Pantalla 6.5 pulgadas, 128GB de almacenamiento"
}

for(const prod in producto1){
    console.log(prod, ":", producto1[prod]);
}

