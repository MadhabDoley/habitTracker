import React from 'react';
import { TextField, Button } from '@mui/material';

const Filter = () => {
  const handleFilter = () => {
    // Logic for filtering activities
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
      <TextField label="Category" variant="outlined" />
      <TextField type="date" label="Start Date" variant="outlined" />
      <TextField type="date" label="End Date" variant="outlined" />
      <Button variant="contained" color="primary" onClick={handleFilter}>Filter</Button>
    </div>
  );
};

export default Filter;
