import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import TinyLineChart from '../TinyLineChart/TinyLineChart';
import dayjs from 'dayjs';

const WeatherCard = ({ data }) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <Card style={{ height: '150px', minWidth: '350px' }}>
            <CardContent>
                <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{data.averageTemp.toFixed(0)} &#x2109;</div>
                <div>{days[dayjs(data.date).day()]}, {data.date}</div>
            </CardContent>
            <TinyLineChart data={data.dataPoints}></TinyLineChart>
        </Card>
    )
}

WeatherCard.defaultProps = {
    data: {},
}

WeatherCard.propTypes = {
    data: PropTypes.object,
}


export default WeatherCard
