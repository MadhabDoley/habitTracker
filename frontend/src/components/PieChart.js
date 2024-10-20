// PieChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Define your color palette

const CustomPieChart = () => {
  const activities = useSelector(state => state.activities);

  // Function to calculate category distribution
  const getCategoryData = () => {
    const categoryCount = activities.reduce((acc, activity) => {
      acc[activity.category] = (acc[activity.category] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(categoryCount).map(([category, count], index) => ({
      name: category,
      value: count,
      color: COLORS[index % COLORS.length],
    }));
  };

  const data = getCategoryData();

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
