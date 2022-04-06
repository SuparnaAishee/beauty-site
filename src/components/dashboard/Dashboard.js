import React, { useEffect, useState } from 'react';
import { LineChart, Line, PieChart, Pie, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <h1>This is Dashboard</h1>
            <div className='flex items-center justify-between'>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                </LineChart>

                <PieChart width={730} height={250} >
                    <Pie data={data} dataKey="sell" nameKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" nameKey="investment" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
            </div>


        </div>
    );
};

export default Dashboard;