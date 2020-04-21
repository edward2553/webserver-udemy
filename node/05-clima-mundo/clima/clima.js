//logica para obtener las coordenadas y la direccion
const axios = require('axios').default;

const API_KEY = '4fa38ecadec17b4aa270eb3a523fce8f';
const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ API_KEY }&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}