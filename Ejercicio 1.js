//Ejercicio 1

ciudad = {
}

const persona = {
    nombre: "Juan",
    apellido: "Quintana",
    edad: 27,
    cuil: 27371325009
}
Persona.domilicio = "Av. San Martín 1234"
Persona.telefono = 3764506070
Persona.nombre = "Pablo"
delete Persona.nombre

//Ejercicio 2

const { nombre, apellido, telefono } = persona
console.log(nombre, apellido, telefono)