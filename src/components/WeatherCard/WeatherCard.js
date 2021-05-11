import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import TinyLineChart from '../TinyLineChart/TinyLineChart';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectDate } from '../../actions/index';

const WeatherCard = ({ data }) => {

    const dispatch = useDispatch();

    const tempScale = useSelector(state => state.tempScale);
    const selectedDate = useSelector(state => state.selectedDate);

    const handleSelect = () => {
        dispatch(selectDate(data));
    };


    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <CardActionArea onClick={handleSelect} style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"' }}>
            <Card style={{ height: '150px', minWidth: '350px', backgroundColor: selectedDate.date === data.date ? 'dimgrey' : '' }}>
                <CardContent>
                    <div style={{ fontSize: '2em', fontWeight: 'bold' }}>{data.averageTemp.toFixed(0)} {tempScale === 'imperial' ? (<span>&#x2109;</span>) : (<span>&#8451;</span>)}</div>
                    <div>{days[dayjs(data.date).day()]}, {data.date}</div>
                </CardContent>
                <TinyLineChart data={data.dataPoints}></TinyLineChart>
            </Card>
        </CardActionArea>
    )
}

WeatherCard.defaultProps = {
    data: {},
}

WeatherCard.propTypes = {
    data: PropTypes.object,
}


export default WeatherCard
