let a = prompt("Ingresa el primer numero:");
let b = prompt("Ingresa el segundo numero:");

a = Number(a);
b = Number(b);

if(a > b){
    alert("El primer numero es el mayor");
} else if(a < b){
    alert("El segundo numero es el mayor");
} else {
    alert("Ambos numeros son iguales");
}

let edad = prompt("Cual es tu edad?");
edad = Number(edad);

let nota = prompt("Ingresa tu nota (0-10):");
nota = Number(nota);

if(nota >= 9){
    alert("Excelente");
}else if(nota >= 7){
    alert("Bueno");
}else if(nota >= 5){
    alert("Regular");
}else{
    alert("Reprobado");
}

let edad2 = Number(prompt("Cual es tu edad?"));
let password = prompt("Ingresa tu contraseña:");

if(edad2 >= 18 && password === "admin123"){
    alert("Acceso concedido");
}else{
    alert("Acceso denegado");
}

let numero = Number(prompt("Ingresa un numero:"));

if(numero % 3 === 0 && numero % 5 === 0){
    alert("El numero es multiplo de 3 y de 5");
}else if(numero % 3 === 0){
    alert("El numero es multiplo de 3");
}else if(numero % 5 === 0){
    alert("El numero es multiplo de 5");
}else{
    alert("El numero no es multiplo de 3 ni de 5");
}

console.log("CONDICIONALES");

console.log("IF SIMPLE");
temperatura = 35;
if(temperatura > 30){
    console.log("Hace calor");
}

console.log("IF ELSE");
usuariobloqueado = true;
if(usuariobloqueado){
    console.log("Bienvenido de nuevo");
} else {
    console.log("Por favor iniciar sesion");
}

console.log("IF ELSE IF ELSE");
nota = 9;
if(nota >= 9){
    console.log("Excelente");
} else if(nota >= 6){
    console.log("Aprobado");
} else{
    console.log("Reprobado");
}
