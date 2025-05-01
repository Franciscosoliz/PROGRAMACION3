let persona = {
    nombre: "Carlos",
    apellido: "Perez",
    direccion: "Calle ficticia 123",
    telefono: 987654321
}

console.log(persona);

console.log("Apellido de la persona", persona.apellido);
console.log("Nombre de la persona", persona["nombre"]);

persona.apellido = "Gomez";
persona["direccion"] = "Avenida real 456";

console.log(persona);

persona.promedio = 8;
console.log(persona);

delete persona.promedio;
console.log(persona);

let personaClonada = { ...persona };
personaClonada.nombre = "Juan";
personaClonada.apellido = "Lopez";
console.log(personaClonada);

let producto = {
    precio: 50,
    cantidad: 2,
    iva: 5,
    nombre: "smartphone",
    subtotal: 0
}

producto.subtotal = producto.precio * producto.cantidad;
let iva = producto.subtotal * (producto.iva / 100);
let precioTotal = producto.subtotal + iva;

producto.subtotal = producto.precio * producto.cantidad + producto.iva;
console.log(producto);

for (let clave in producto) {
    console.log(clave + ": " + producto[clave]);
}

console.log(Object.keys(producto));
console.log(Object.values(producto));

let usuario = {
    nombre: "Maria",
    saludar: function() {
        return "Hola soy " + this.nombre;
    }
}
console.log(usuario.saludar());

let categoria = {
    nombre: "Electronomesticos",
    productos: ["tele", "refri", "Micro", { cantidad: 10, marca: "Samsung" }],
    descripcion: {
        cantidad: "Cantidad disponible",
        tamaño: "Tamaño prom"
    }
}
console.log(categoria);
