datos = [
    [55557777, "Sebastian", "Quintana", "Mahler 2321", 19, "Tec. Sup. en Gastronomía", true]
]

datos.push(
    [12348765, "Juan", "Pintos", "Av. San Martín 1234", 21, "Tec. Sup. en Desarrollo de Apps y Páginas Web", true],
    [43215678, "Ludmila", "Ávalos", "Av. Martin Fierro 2233", 26, "Tec. Sup. en Desarrollo de Apps y Páginas Web", true],
    [43211234, "Matías", "Fernandez", "Las Magnólias 1122", 27, "Tec. Sup. en Gastronomía", false],
    [55556666, "Micaela", "Nuñez", "Bethoven 666", 29, "Tec. Sup. en Gastronimía", false]
)

datos.forEach((i) => {
    console.log(i)
});

datos.forEach((element, j) => {
    if(datos[j][5] == "Tec. Sup. en Desarrollo de Apps y Páginas Web") {
        console.log(`${datos[j][1]} ${datos[j][2]} es alumno/a de la T.S.D.A.P.W.`)
    }
})