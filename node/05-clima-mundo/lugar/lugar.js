//logica para obtener las coordenadas y la direccion
const axios = require('axios').default;

const getLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        timeout: 1000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'a7cdda63a8mshef7de502e08421bp1f03f1jsn3aeaeb7441f4'
        }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw Error(`no hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direccion2 = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion2,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}