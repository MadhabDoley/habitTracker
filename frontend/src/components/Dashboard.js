import React, { useState } from 'react';
import { Container, Grid, Button } from '@mui/material';
import Summary from './Summary';
import Filter from './Filter';
import ActivityList from './ActivityList';
import ActivityForm from './ActivityForm';
import PieChart from './PieChart';
import BarChart from './BarChart';

const Dashboard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <Container>
      <Filter /> {/* Positioned at the top right */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleForm}
        style={{ position: 'absolute', top: 20, right: 20 }} // Adjust position as needed
      >
        Add New Activity
      </Button>
      {isFormOpen && <ActivityForm onClose={toggleForm} />}
      <Grid container spacing={2}>
        <Grid item xs={8}> {/* Left Side */}
          <Summary />
          <PieChart />
          <BarChart />
        </Grid>
        <Grid item xs={4}> {/* Right Side */}
          <ActivityList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
