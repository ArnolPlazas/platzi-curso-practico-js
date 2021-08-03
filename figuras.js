// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();


// Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;


console.log(`Los lados del triángulo lado 1: ${ladoTriangulo1}cm, lado 2: ${ladoTriangulo2}cm y la base ${baseTriangulo}cm`);
console.log(`La altura del triángulo mide: ${alturaTriangulo}cm`);
console.log(`El perimetro del triángulo mide: ${perimetroTriangulo}cm`);
console.log(`El área del triángulo mide: ${areaTriangulo}cm2`);
console.groupEnd();

// Código del Círculo
console.group("Círculo");

const radioCirculo = 4;
const diametroCirculo = 2 * radioCirculo;
const PI = Math.PI;
const perimetroCirculo = PI * diametroCirculo;
const areacirculo = PI * (radioCirculo * radioCirculo);

console.log(`El radio del circulo mide: ${radioCirculo}cm`);
console.log(`El diametro del circulo mide: ${diametroCirculo}cm`);
console.log(`PI en JS es: ${PI}cm`);
console.log(`El área en el círculo mide: ${areacirculo}cm2`);



console.groupEnd();