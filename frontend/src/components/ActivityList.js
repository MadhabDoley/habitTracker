import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities, deleteActivity } from '../redux/actions';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const ActivityList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteActivity(id));
  };

  return (
    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemText
            primary={<Typography variant="h6">{activity.description}</Typography>}
            secondary={
              <>
                <Typography variant="body2">Duration: {activity.duration} minutes</Typography>
                <Typography variant="body2">Calories: {activity.calories}</Typography>
                <Typography variant="body2">Date: {activity.date}</Typography>
              </>
            }
          />
          <Button onClick={() => onEdit(activity)}>Edit</Button>
          <Button onClick={() => handleDelete(activity.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ActivityList;
