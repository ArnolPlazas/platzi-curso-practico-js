
function calcularModa(lista){
    const listacount = {};
    lista.map(
        (e) =>{
            if(listacount[e]){
                listacount[e] += 1; 
            }else{
                listacount[e] = 1;
            }
        }
    );

    const listaArray = Object.entries(listacount).sort(
        (valorAcomulado, nuevoValor)=>{
            return valorAcomulado[1] - nuevoValor[1]
        }
    );

    let moda = listaArray[listaArray.length - 1];

    return moda;
}






