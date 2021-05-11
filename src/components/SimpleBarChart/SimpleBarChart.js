import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SimpleBarChart = ({ data }) => {

    const tempScale = useSelector(state => state.tempScale);

    const chartData = [];

    data.forEach(dataPoint => {
        chartData.push({
            name: dataPoint.dt_txt,
            temp: dataPoint.main.temp
        });
    });

    const DataFormater = (number) => {
        console.log(number)
        if(tempScale === 'imperial') {
            return number + '°F';
        }
        if(tempScale === 'metric') {
            return number + '°C';
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={DataFormater} />
                <Bar maxBarSize={50} dataKey="temp" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
};

SimpleBarChart.defaultProps = {
    data: []
}

SimpleBarChart.propTypes = {
    data: PropTypes.array
}

export default SimpleBarChart
