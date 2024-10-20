import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const summary = useSelector(state => state.summary);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Exercise Duration: {summary.totalDuration} minutes</p>
      <p>Calories Burned: {summary.caloriesBurned}</p>
      <p>Calories Consumed: {summary.caloriesConsumed}</p>
      <p>Sleep Hours: {summary.sleepHours} hours</p>
    </div>
  );
};

export default Summary;
