//Objetc.assign

const Proveedor = {
    nombre: "Coca Cola",
    productos: "Bebidas",
    variedad: ["Gaseosa", "Agua Mineral", "Agua Savorizada"]
}

const Ciudad = {
    nombre: "Posadas",
    codPostal: 3300,
    provincia: "Misiones"
}

let objetos = Object.assign(Proveedor, Ciudad);

console.log(objetos);