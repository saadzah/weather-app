import { takeLatest, call, put, select } from 'redux-saga/effects';
import { requestWeatherData } from '../api';
import { setWeatherData } from '../actions';
import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs-plugin-utc';

export const getTempScale = (state) => state.tempScale;

export function* handleWeatherData(action) {
    try {
        if (action.type === 'APP_INIT') {
            action.payload = yield select(getTempScale);
        }
        const response = yield call(requestWeatherData, action);
        const data = response.data.list;

        dayjs.extend(dayjsPluginUTC);

        const uniqueDates = [...new Set(data.map(item => dayjs.unix(item.dt).utc().format('YYYY-MM-DD')))];
        const weatherData = [];
        uniqueDates.forEach(date => {
            weatherData.push(
                {
                    date,
                    dataPoints: data.filter(item => dayjs.unix(item.dt).utc().format('YYYY-MM-DD') === date)
                }
            )
        });

        weatherData.forEach(date => {
            date['averageTemp'] = date.dataPoints.reduce((sum, next) => sum + next.main.temp, 0) / date.dataPoints.length;
        });

        yield put(setWeatherData(weatherData));
    } catch (err) {
        console.log(err);
    }
}

export function* watcherSaga() {
    yield takeLatest('APP_INIT', handleWeatherData);
    yield takeLatest('SET_TEMP_SCALE', handleWeatherData);
};