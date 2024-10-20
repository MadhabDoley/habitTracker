const initialState = {
    activities: [],
    summary: {
      totalDuration: 0,
      caloriesBurned: 0,
      caloriesConsumed: 0,
      sleepHours: 0
    },
  };
  
  const activityReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ACTIVITIES':
        return {
          ...state,
          activities: action.payload,
        };
      case 'ADD_ACTIVITY':
        return {
          ...state,
          activities: [...state.activities, action.payload],
        };
      case 'UPDATE_ACTIVITY':
        return {
          ...state,
          activities: state.activities.map((activity) =>
            activity.id === action.payload.id ? action.payload : activity
          ),
        };
      case 'DELETE_ACTIVITY':
        return {
          ...state,
          activities: state.activities.filter(activity => activity.id !== action.payload),
        };
      case 'UPDATE_SUMMARY':
        return {
          ...state,
          summary: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default activityReducer;
  