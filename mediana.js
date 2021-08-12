
function calcularMediaAritmetica(lista){
        const sumaLista = lista.reduce(
            (valorAcomulado = 0, nuevoElemento) =>{
                return valorAcomulado + nuevoElemento;
            }
        );
        const promedioLista = sumaLista/lista.length;
    
        return promedioLista;
}



function calcularMediana(lista){
    let mediana;
    lista.sort();

    const mitadLista = parseInt(lista.length/2);
    const esPar = (numero) =>{
        if(numero % 2 === 0){
            return true
        } else{
            return false
        }
    }
    
    if(esPar(lista.length)){
        const e1 = lista[mitadLista];
        const e2 = lista[mitadLista - 1];
        mediana = calcularMediaAritmetica([e1, e2]);
    } else {
        mediana = lista[mitadLista];
    }

    return mediana

}




