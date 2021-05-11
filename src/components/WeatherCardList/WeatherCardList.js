import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import WeatherCard from '../WeatherCard/WeatherCard';

const WeatherCardList = ({ data }) => {

    return (
        <>
            <Grid container spacing={4}>
                {data.map((date) => (
                    <Grid key={date?.date} item xs={12} md={4} xl={4}>
                        <WeatherCard data={date} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}


WeatherCardList.defaultProps = {
    data: []
}

WeatherCardList.propTypes = {
    data: PropTypes.array
}

export default WeatherCardList
