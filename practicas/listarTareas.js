var fs = require('fs');

function listar(){

    var tareas = fs.readFileSync('./tareas.json', 'utf-8');

    var arrayTareas = JSON.parse(tareas);
    
  
   
 //   console.log(arrayTareas);
    arrayTareas.forEach(arg1 => {
        console.log(arg1.titulo)
        
    });

}
module.exports = listar;


