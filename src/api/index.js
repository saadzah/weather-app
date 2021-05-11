import axios from 'axios';

export function requestWeatherData(action) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40&units=${action.payload}`);
}