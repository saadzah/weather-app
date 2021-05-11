import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import TinyLineChart from '../TinyLineChart/TinyLineChart';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const WeatherCard = ({ data }) => {

    const tempScale = useSelector(state => state.tempScale);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <Card style={{ height: '150px', minWidth: '350px' }}>
            <CardContent>
                <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{data.averageTemp.toFixed(0)} {tempScale === 'imperial' ? (<span>&#x2109;</span>) : (<span>&#8451;</span>)}</div>
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
