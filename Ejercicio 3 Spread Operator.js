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

const spread = {
    ...proveedor,
    ...ciudad
}

console.log(spread);