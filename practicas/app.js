var listar = require('./listarTareas');

switch (process.argv[2]) {
    case 'listar':
        listar();
        break;
    case undefined:
        console.log('Nada');
        break;
    default:
        console.log('No entiendo');
        break;
}





