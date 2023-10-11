function areaCuadrado() {
    let cuadrado
    let lado1
    let lado2

    lado1 = prompt("INGRESA EL PRIMER LADO DEL CUADRADO: ")
    lado2 = prompt("INGRESA EL SEGUNDO LADO DEL CUADRADO: ")

    cuadrado = lado1 * lado2

    alert("EL AREA DEL CUADRADO ES: " + cuadrado);
}

function areaTriangulo() {
    let triangulo
    let base
    let altura

    base = prompt("INGRESA LA BASE DEL TRIANGULO: ")
    altura = prompt("INGRESA LA ALTURA DEL TRIANGULO: ")

    triangulo = ((base * altura) / 2)

    alert("EL AREA DEL TRIANGULO ES: " + triangulo)
}

function areaRectangulo() {
    let rectangulo
    let base1
    let altura1

    base1 = prompt("INGRESA LA BASE DEL RECTANGULO: ")
    altura1 = prompt("INGRESA LA ALTURA DEL RECTANGULO: ")

    rectangulo = base1 * altura1

    alert("EL AREA DEL RECTANGULO ES: " + rectangulo)
}

function calcular() {
    let select = document.getElementById("figura")

    if (select.value == "cuadrado") {
        areaCuadrado();
    } else if (select.value == "triangulo") {
        areaTriangulo();
    } else if (select.value == "rectangulo") {
        areaRectangulo();
    }
}
