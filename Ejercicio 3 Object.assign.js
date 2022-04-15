//Objetc.assign

const proveedor = {
    nombre: "Coca Cola",
    productos: "Bebidas",
    variedad: ["Gaseosa", "Agua Mineral", "Agua Savorizada"]
}

const ciudad = {
    nombre: "Posadas",
    codPostal: 3300,
    provincia: "Misiones"
}

let objetos = Object.assign(proveedor, ciudad);

console.log(objetos);