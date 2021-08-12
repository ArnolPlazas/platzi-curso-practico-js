const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


const v1 =  notes.map((e) =>{
    return e.note * e.credit;
});

const v2 = v1.reduce(
    (acc, curr) =>{
        return acc + curr;
    }
);

let promedio_ponderado = v2/v1.length