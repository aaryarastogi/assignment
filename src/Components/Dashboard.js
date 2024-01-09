// src/components/Dashboard.js
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import './CSS/DashboardStyle.css'
import { Pie, PieChart } from 'recharts';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {

    const location = useLocation();
    const userData = location.state?.userData;
    console.log(userData);

  const gender = [
    { name: 'Male', percent: 75 },
    { name: 'Female', percent: 25 },
    ];

    const employment=[
        {name:'Full Time' , percent:20},
        {name:'Part Time' , percent:31},
        {name:'Daily Wage' , percent:49}
    ]

  return (
    <div className='dashboard'>
      <div className="sidebar">
        <p>Dashboard</p>
        <hr/>
      </div>
      <div className='rightpart'>
        <h1 className='head'>Key performance indicators</h1>
        <div className='pieCont'>
            <h3>Gender Distribution</h3>
            <div style={{display:'flex',flexDirection:'row'}}>
                <PieChart width={300} height={300}>
                <Pie
                    dataKey="percent"
                    isAnimationActive={false}
                    data={gender}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="transparent" 
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                    return (
                        <text
                            x={x}
                            y={y}
                            fill="white"
                            textAnchor="middle"
                            dominantBaseline="central"
                        >
                            <tspan x={x}>{gender[index].name}</tspan>
                            <tspan x={x} dy="1.2em" fontSize="80%">
                            ({gender[index].percent}%)
                            </tspan>
                        </text>
                    );
                    }}
                    stroke="white" 
                    strokeWidth={1} 
                />
                </PieChart>
                <div className='users'>
                    <p>Total Users : 1024</p>
                    <p>Male: 768</p>
                    <p>Female: 256</p>
                </div>
            </div>
        </div>

        <div className='pieCont'>
            <h3>Employment type</h3>
            <div style={{display:'flex' , flexDirection:'row'}}>
                <PieChart width={300} height={300}>
                <Pie
                    dataKey="percent"
                    isAnimationActive={false}
                    data={employment}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="transparent"
                    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

                    return (
                        <text
                            x={x}
                            y={y}
                            fill="white"
                            textAnchor="middle"
                            dominantBaseline="central"
                        >
                            <tspan x={x}>{employment[index].name}</tspan>
                            <tspan x={x} dy="1.2em" fontSize="80%">
                            ({employment[index].percent}%)
                            </tspan>
                        </text>
                    );
                    }}
                    stroke="white" 
                    strokeWidth={1}
                />
                </PieChart>
                <div className='users'>
                    <p>Total Users : 1024</p>
                    <p>Full Time : 205</p>
                    <p>Part Time : 317</p>
                    <p>Daily Wage : 502</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
