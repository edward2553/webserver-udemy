const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${ archivo }`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv.base);
// console.log('Limite', argv.limite);

// El entrypoint en el package.json es el primer archivo que se ejecuta y despliega toda nuestra aplicacion
//es el archivo por defecto