export const setWeatherData = (value) => {
    return {
        type: 'SET_WEATHER_DATA',
        payload: value
    };
};

export const setTemperatureScale = (value) => {
    return {
        type: 'SET_TEMP_SCALE',
        payload: value
    };
};

export const appInit = () => {
    return {
        type: 'APP_INIT'
    };
};