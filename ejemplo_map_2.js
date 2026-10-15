// Crear el Mapa para el inventario
let inventarioTienda = new Map();

// Agregar productos con .set
inventarioTienda.set("PROD-001",{ nombre:"Laptop", precio:1200, stock:5 });
inventarioTienda.set("PROD-002",{ nombre:"Teclado simple", precio:85, stock:13 });
inventarioTienda.set("PROD-003",{ nombre:"Mouse", precio:25, stock:40 });

// Consultar un producto
let productoBuscado = "PROD-002";

// Consultar un producto especifico
if(inventarioTienda.has(productoBuscado)){
    let producto = inventarioTienda.get(productoBuscado);
    console.log(`Producto encontrado: ${producto.nombre} | Precio: ${producto.precio} | Stock ${producto.stock}`);
}

// Actualizar los datos del prudcto
let productoVendido = inventarioTienda.get(productoBuscado)
productoVendido.stock = productoVendido.stock - 2; // productoVendido.stock -= 2;
productoVendido.nombre = "Teclado mecanico";
productoVendido.nombre = "Teclado con luces";
productoVendido.precio = 100; // Restando el stock en la variable

inventarioTienda.set(productoBuscado,productoVendido); //Actualizando el map
console.log(inventarioTienda); // Mostramos la información del map

// Recorrer el inventario con un bucle for ... of
for(let[sku,datos] of inventarioTienda){
    console.log(`${sku} -> ${datos.nombre} | Precio: ${datos.precio} | Stock disponible: ${datos.stock}`);
}

// Eliminar un producto descontinuado .delete()
inventarioTienda.delete("PROD-003");
console.log(inventarioTienda);