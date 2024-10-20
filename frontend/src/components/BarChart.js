// BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';

const CustomBarChart = () => {
  const activities = useSelector(state => state.activities);

  // Function to calculate calories burned and consumed over time
  const getCaloriesData = () => {
    const data = activities.reduce((acc, activity) => {
      const date = activity.date.split('T')[0]; // Normalize the date to YYYY-MM-DD
      acc[date] = acc[date] || { date, caloriesBurned: 0, caloriesConsumed: 0 };
      acc[date].caloriesBurned += activity.calories; // Assuming calories represent burned calories; adjust as needed
      acc[date].caloriesConsumed += activity.caloriesConsumed; // Assuming you have a separate field for consumed calories
      return acc;
    }, {});

    return Object.values(data);
  };

  const data = getCaloriesData();

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="caloriesBurned" fill="#0088FE" />
      <Bar dataKey="caloriesConsumed" fill="#FFBB28" />
    </BarChart>
  );
};

export default CustomBarChart;
