productos = [
    [771234500, "Coca Cola", 250, "Bebidas"],
    [761235400, "Ayudín", 120, "Limpieza"],
    [751234400, "Merengadas", 130, "Galletitas"],
    [751234500, "Óreo", 160, "Galletitas"],
    [761235100, "Ariel", 470, "Limpieza"],
    [711234500, "Sprite", 240, "Bebidas"],
    [701234500, "Heineken", 280, "Bebidas"],
    [721234500, "Rexona", 310, "Belleza y Salud"],
    [691432500, "Orégano", 110, "Especias"],
    [681235400, "Pan Lactal", 275, "Panadería"]
]

productos[5].splice(1, 1, "7up")

for(n in productos) {
    console.log(productos[n])
}