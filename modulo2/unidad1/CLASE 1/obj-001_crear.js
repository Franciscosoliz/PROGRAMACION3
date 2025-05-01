let alumno ={
    nombre:"Fernando",
    apellido:"Jose",
    direccion:"pintag",
    telefono:3915545

}

console.log(alumno);
// Accede a propiedades
console.log("apellido del alumno",alumno.apellido);
console.log("nombre del alumno",alumno["alumno"]);

alumno.apellido="Lopez";
alumno["direccion"]="Av Bolivar";

console.log(alumno);

// incluir una propiedad
alumno.promedio=9;
console.log(alumno);

delete alumno.promedio
console.log(alumno);

alumnoclonado = {...alumno}
alumnoclonado.nombre = "Jefferson";
alumnoclonado.apellido = "Llulluna"
console.log(alumnoclonado)

// Multiplicar precio unitario * cantidad y sumarle iva
//  y asignar el valor subtotal 
item ={
    preciounitario: 23,
    cantidad: 3,
    iva:3.4,
    nombre : "Laptop",
    subtotal : 0
}

item.subtotal = item.preciounitario * item.cantidad;
let iva = item.subtotal * (item.iva / 100);
let preciototal= item.subtotal + iva;

item.subtotal=item.preciounitario*item.cantidad+item.iva;
console.log(item);


// console.log("preciototal: " + preciototal);

// console.log("Subtotal: " + item.subtotal);
// console.log("IVA : " + iva);
// console.log("preciototal: " + preciototal);

for (let clave in item){
    console.log(clave + ":"+ item[clave])
}

//  Listar claves o propiedades 
console.log(Object.keys(item));

//  listar los valores
console.log(Object.values(item));

// Metodos o funciones en objetivos

usuario = {
    nombre:"Fernando",
    saludar :function(){
        return " hola soy "  +  this.nombre;
    }
}
console.log(usuario.saludar());


//  Objetos anidados
categoria = {
    nombre :"Electronica",
    productos : ["Laptop","Mobnitor","Teclado",{cantidad:12, marca:"Sony"}],
    descripcion:{
        cantidad:"16hz",
        tamaño:"12 pulgadas"
    }
}
console.log(categoria);