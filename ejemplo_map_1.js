// Crear el mapa
let libretaContactos = new Map();

// Agregar contactos .set
libretaContactos.set("Ana","987655165");
libretaContactos.set("Sandra","959565957");
libretaContactos.set("Carlos","987654321"); //este dato es reemplazado
libretaContactos.set("Jesus","959565957");
libretaContactos.set("Carlos","999888777");

// Consultar si existe una clave .has
console.log(libretaContactos.has("Ana"));
let respuesta = libretaContactos.has("Diego");
console.log(respuesta);

// Obtener un valor .get
console.log(libretaContactos.get("Carlos"));

// Ver el tamaño total con .size
console.log(`Total de contactos: ${libretaContactos.size}`);

// Recorrer el Map con un bucle for .. of
for(let [nombre,telefono] of libretaContactos){
    console.log(`${nombre} -> Telefono: ${telefono}`);   
}