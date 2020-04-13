// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const { crear, cargarDb, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = cargarDb();
        console.log('=============Por Hacer============='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        actualizado ? console.log('Se ha actualizado la tarea') : console.log('No se pudo actualizar la tarea');
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        borrado ? console.log('Se ha borrado la tarea') : console.log('No se pudo borrar la tarea');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}