
function calcularMediaAritmetica(lista){
        const sumaLista = lista.reduce(
            (valorAcomulado = 0, nuevoElemento) =>{
                return valorAcomulado + nuevoElemento;
            }
        );
        const promedioLista = sumaLista/lista.length;
    
        return promedioLista;
    }

const lista1 = [
    100,
    200,
    500,
    4000000
];

const mitadLista = parseInt(lista1.length/2);

const esPar = (numero) =>{
    if(numero % 2 === 0){
        return true
    } else{
        return false
    }
}
let mediana;

if(esPar(lista1.length)){
    const e1 = lista1[mitadLista];
    const e2 = lista1[mitadLista - 1];
    mediana = calcularMediaAritmetica([e1, e2]);
} else {
    mediana = lista1[mitadLista];
}