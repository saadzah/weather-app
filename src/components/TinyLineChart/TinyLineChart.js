import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, YAxis, ResponsiveContainer } from 'recharts';

const TinyLineChart = ({ data }) => {

    const chartData = [];

    data.forEach(dataPoint => {
        chartData.push({
            name: dataPoint.dt_txt,
            temp: dataPoint.main.temp
        });
    });

    return (
        <ResponsiveContainer width="100%" height="40%">
            <LineChart data={chartData}>
                <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} dot={false} />
                <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true}/>
            </LineChart>
        </ResponsiveContainer>
    )
}

TinyLineChart.defaultProps = {
    data: []
}

TinyLineChart.propTypes = {
    data: PropTypes.array
}

export default TinyLineChart
