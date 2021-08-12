const salariosCol = colombia.map(
    (p)=>{
        return p.salary;
    }
)

const salariosColSorted =salariosCol.sort(
    (s1, s2)=>{
        return s1 -s2;
    }
);

const espar = (n) =>{
    return n % 2 == 0;
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        (valorAcomulado = 0, nuevoElemento) =>{
            return valorAcomulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}


const medianaSalarios = (lista)=>{
    const mitad = parseInt(lista.length / 2);
    if (espar(lista.length)){
        const pm1 = lista[mitad - 1];
        const pm2 = lista[mitad];
        const mediana = calcularMediaAritmetica([pm1, pm2]);
        return mediana;

    }else{
        const pm = lista[mitad];
        return pm;
    }
}

console.log(medianaSalarios(salariosColSorted));

