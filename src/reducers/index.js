const initialState = {
    weatherData: [],
    tempScale: 'imperial',
    selectedDate: {},
    loading: true
};

const appReducer = (state = JSON.parse(JSON.stringify(initialState)), action) => {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return { ...state, weatherData: action.payload, loading: false };
        case 'SET_TEMP_SCALE':
            return { ...state, tempScale: action.payload, loading: true };
        case 'SELECT_DATE':
            return { ...state, selectedDate: action.payload };
        default:
            return state;
    }
};

export default appReducer;