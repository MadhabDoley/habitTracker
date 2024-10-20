import React, { useState } from 'react';
import { Button, TextField, Dialog } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addActivity, updateActivity } from '../redux/actions';

const ActivityForm = ({ activityToEdit, onClose }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(activityToEdit ? activityToEdit.description : '');
  const [duration, setDuration] = useState(activityToEdit ? activityToEdit.duration : '');
  const [calories, setCalories] = useState(activityToEdit ? activityToEdit.calories : '');
  const [date, setDate] = useState(activityToEdit ? activityToEdit.date : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activityToEdit) {
      dispatch(updateActivity({ ...activityToEdit, description, duration, calories, date }));
    } else {
      dispatch(addActivity({ description, duration, calories, date }));
    }
    onClose();
  };

  return (
    <Dialog open onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <TextField label="Duration" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        <TextField label="Calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
        <TextField label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <Button type="submit">Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </form>
    </Dialog>
  );
};

export default ActivityForm;
