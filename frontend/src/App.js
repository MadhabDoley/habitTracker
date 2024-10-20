import React, { useState } from 'react';
import ActivityList from './components/ActivityList';
import ActivityForm from './components/ActivityForm';
import Summary from './components/Summary';
import Filter from './components/Filter';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [currentActivity, setCurrentActivity] = useState(null);

  return (
    <div className="App">
      <h1>Health Activity Tracker</h1>
      {/* <Filter /> */}
      <Dashboard />
      {/* <ActivityForm currentActivity={currentActivity} onSave={() => setCurrentActivity(null)} /> */}
      {/* <ActivityList onEdit={(activity) => setCurrentActivity(activity)} /> */}
    </div>
  );
};

export default App;
