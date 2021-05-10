const initialState = {
    weatherData: [],
    loading: true
};

const appReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return { ...state, weatherData: action.payload, loading: false};
        default:
            return state;
    }
};

export default appReducer;