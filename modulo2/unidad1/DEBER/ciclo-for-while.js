for(let i = 10; i >= 1; i--){
    console.log("Cuenta regresiva del 10 al 1 :", i);
}

let factorial = 1;
for(let i = 1; i <= 6; i++){
    factorial *= i;
}
console.log("El factorial de 6 es:", factorial);

let sumaImpares = 0;
for(let i = 1; i <= 20; i++){
    if (i % 2 !== 0){
        console.log("Numero impar:", i);
        sumaImpares += i;
    }
}
console.log("El total de la suma de los numeros impares es :", sumaImpares);

for(let i = 1; i <= 10; i++){
    console.log("El cubo de", i, "es:", i**3);
}

for(let i = 1; i <= 10; i++){
    if(i % 3 === 0){
        console.log(i, "es divisible entre 3");
    }
}

let texto = "Programar es entretenido jaja";
for(let i = 0; i < texto.length; i++){
    if(i % 2 === 0){
        console.log(texto[i]);
    }
}



// While
let i = 10;
while(i >= 1){
    console.log("Cuenta regresiva:", i);
    i--;
}

let x = 1;
while(x <= 5){
    console.log("3 x", x, "=", 3 * x);
    x++;
}

let sum = 0;
let num = 1;
do{
    sum += num;
    console.log("Suma hasta", num, "es:", sum);
    num++;
} while(num <= 5);

let n = 1;
do{
    console.log("Numero actual:", n);
    n++;
} while(n <= 7);


let vehiculos = ["coche", "moto", "bicicleta", "camion", "autobus", "tren", "avion", "barco", "helicoptero", "patinete"];
let vehiculo = 0;
do{
    console.log("Vehiculo", vehiculo + 1, "es:", vehiculos[vehiculo]);
    vehiculo++;
} while(vehiculo < vehiculos.length);

let colores = ["rojo", "azul", "verde", "amarillo", "naranja", "morado", "blanco", "negro", "rosa", "gris"];
let color = 0;
do{
    console.log("Color", color + 1, "es:", colores[color]);
    color++;
} while(color < colores.length);


let j = 1;
while(j <= 8){
    console.log(j, "es menor que 10");
    j++;
}

let y = 10;
while(y >= 1){
    console.log("Contando hacia atras:", y);
    y--;
}

