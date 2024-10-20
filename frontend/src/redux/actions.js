import axios from 'axios';

const API_URL = 'http://localhost:4000/activities';

export const fetchActivities = () => async (dispatch) => {
  console.log(API_URL, "API_URL")
  const response = await axios.get(API_URL);
  dispatch({ type: 'FETCH_ACTIVITIES', payload: response.data });
  dispatch(updateSummary(response.data));
};

export const addActivity = (activity) => async (dispatch) => {
  const response = await axios.post(API_URL, activity);
  dispatch({ type: 'ADD_ACTIVITY', payload: response.data });
  dispatch(updateSummary());
};

export const updateActivity = (id, activity) => async (dispatch) => {
  console.log(id, activity)
  const response = await axios.put(`${API_URL}/${id}`, activity);
  dispatch({ type: 'UPDATE_ACTIVITY', payload: response.data });
  dispatch(updateSummary());
};

export const deleteActivity = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: 'DELETE_ACTIVITY', payload: id });
  dispatch(updateSummary());
};

export const updateSummary = (activities) => {
  let totalDuration = 0, caloriesBurned = 0, caloriesConsumed = 0, sleepHours = 0;
  
  activities.forEach(activity => {
    if (activity.category === 'exercise') {
      totalDuration += activity.duration;
      caloriesBurned += activity.calories;
    } else if (activity.category === 'nutrition') {
      caloriesConsumed += activity.calories;
    } else if (activity.category === 'sleep') {
      sleepHours += activity.duration / 60;
    }
  });

  return {
    type: 'UPDATE_SUMMARY',
    payload: {
      totalDuration,
      caloriesBurned,
      caloriesConsumed,
      sleepHours
    }
  };
};
