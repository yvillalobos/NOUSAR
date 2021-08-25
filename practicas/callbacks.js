let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(callback){
    return callback >= 7;
});

let desaprobados = estudiantes.filter(function(callback){
    return callback < 7;
});
console.log(aprobados);
console.log(desaprobados);