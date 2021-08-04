// Código del cuadrado
console.group("Cuadrados");

const perimetroCuadrado = (lado) => lado*4;
const areaCuadrado = (lado)=> lado*lado;

console.groupEnd();


// Código del triángulo
console.group("Triángulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;


console.groupEnd();

// Código del Círculo
console.group("Círculo");

const perimetroCirculo = (diametro) => Math.PI * diametro;
const areaCirculo = (radio) => Math.PI * (radio * radio);

console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}