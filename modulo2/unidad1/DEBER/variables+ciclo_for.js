

var animal = "gato";
console.log("Animal:", animal);
var animal = "perro";
console.log("Nuevo Animal:", animal);

let color = "azul";
console.log("Color:", color);
color = "verde";
console.log("Nuevo Color:", color);

const velocidad = 30;
console.log("Velocidad:", velocidad);


const frutas = ["manzana", "naranja", "platano"];
console.log("Frutas:", frutas);
frutas.push("fresa");
console.log("Frutas actualizadas:", frutas);


// ciclo for of

const estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Carlos", edad: 21 }
];

for (const estudiante of estudiantes) {
    console.log("Estudiante:", estudiante.nombre, "Edad:", estudiante.edad);
}


const mensaje = "Hola Mundo";

for (const letra of mensaje) {
    console.log("Letra:", letra);
}
