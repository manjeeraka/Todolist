import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const Charts = ({ todos }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        let newCount = 0;
        let giveupCount = 0;
        let finishedCount = 0;

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].status == 'new') newCount++;
            if (todos[i].status == 'giveup') giveupCount++;
            if (todos[i].status == 'finished') finishedCount++;
        }

        const data = [{ name: 'New', count: newCount }, { name: 'Giveup', count: giveupCount }, { name: 'Finished', count: finishedCount }];
        setChartData(data);
    }, [todos])
    return (
        <>
            <BarChart width={600} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey='name' />
                <YAxis />
                <Legend />
                <Bar dataKey='count' fill="#8884d8" />
            </BarChart>
        </>
    )
}

export default Charts;