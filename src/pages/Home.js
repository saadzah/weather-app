import React from 'react';
import WeatherCardList from '../components/WeatherCardList/WeatherCardList';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import './Home.css';
import { useDispatch } from 'react-redux';
import { setTemperatureScale } from '../actions/index';
import SimpleBarChart from '../components/SimpleBarChart/SimpleBarChart';

const Home = () => {

    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.weatherData);
    const tempScale = useSelector(state => state.tempScale);
    const selectedDate = useSelector(state => state.selectedDate);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 3;
    const totalPages = Math.ceil(weatherData.length / pageSize);

    const handleScaleChange = (event) => {
        dispatch(setTemperatureScale(event.target.value));
    };

    return (
        <>
            <section>
                <div>
                    <h1>City: Berlin, DE</h1>
                </div>

            </section>
            <section>
                <h1>Forecast</h1>
                <h3>Temperature Scale</h3>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={tempScale} onChange={handleScaleChange} row>
                        <FormControlLabel value="imperial" control={<Radio />} label="Fahrenheit" />
                        <FormControlLabel value="metric" control={<Radio />} label="Celsius" />
                    </RadioGroup>
                </FormControl>
                <div className="nav-button-container">
                    <Button
                        color="secondary"
                        startIcon={<ArrowBack />}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Past Forecast
                </Button>
                    <Button
                        color="secondary"
                        endIcon={<ArrowForward />}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Future Forecast
                </Button>
                </div>

                <div>
                    <WeatherCardList data={weatherData.slice((currentPage - 1) * pageSize, currentPage * pageSize)} />
                </div>

                {selectedDate?.date &&
                    <div style={{ height: '400px' }}>
                        <h3>Date: {selectedDate?.date}</h3>
                        <SimpleBarChart data={selectedDate?.dataPoints} />
                    </div>
                }
            </section>

        </>
    )
}

export default Home
