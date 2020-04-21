const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
        default: "medellin colombia"
    }
}).argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

// getLugarLatLng(argv.direccion).then(resp => {
//     lat = resp.lat;
//     lng = resp.lng;
//     console.log(lat,lng);
// }).catch(err => {
//     console.log('Hubo un error', err);
// });

// getClima(8.660000, -75.919998).then(resp => {
//     console.log('La respuesta', resp);
// }).catch(err => {
//     console.log('Ocurrio algun error', err);
// });

const getInfo = async( direccion ) => {

    try {
        const coords = await getLugarLatLng(direccion);
        const temp = await getClima(coords.lat,coords.lng);
        return `El clima de ${ coords.direccion2 } es de ${ temp } grados centigrados.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`
    }

    // getLugarLatLng(direccion).then(resp => {
    //     getClima(resp.lat, resp.lng).then( clima => {
    //         return `El clima de ${ direccion } es de ${ clima }`;
    //     }).catch(err => {
    //         throw Error(`No se pudo determinar el clima para ${ direccion }`,err);
    //     });
    // }).catch(err => {
    //     throw Error(`No se pudo determinar el clima para ${ direccion }`,err);
    // });

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);