import { takeLatest, call, put } from 'redux-saga/effects';
import { requestWeatherData } from '../api';
import { setWeatherData } from '../actions';

export function* handleWeatherData(action) {
    try {
        const response = yield call(requestWeatherData, action);
        const weatherData = response.data;
        yield put(setWeatherData(weatherData));
    } catch (err) {
        console.log(err);
    }
}

export function* watcherSaga() {
    yield takeLatest('APP_INIT', handleWeatherData);
};