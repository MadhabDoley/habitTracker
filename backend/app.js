const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 4000;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store for health activities
let activities = [
    { id: 1, description: 'Morning Jog', duration: 30, calories: 300, date: '2024-10-18', category: 'exercise' },
    { id: 2, description: 'Healthy Breakfast', duration: null, calories: 500, date: '2024-10-18', category: 'nutrition' },
    { id: 3, description: 'Evening Yoga', duration: 45, calories: 250, date: '2024-10-18', category: 'exercise' },
    { id: 4, description: 'Meditation', duration: 20, calories: 0, date: '2024-10-17', category: 'meditation' },
    { id: 5, description: 'Full Night Sleep', duration: 480, calories: 0, date: '2024-10-17', category: 'sleep' },
];

// Helper function to find activity by ID
const findActivityById = (id) => activities.find(act => act.id === parseInt(id));

// GET /activities - Retrieve all health activities
app.get('/activities', (req, res) => {
    res.json(activities);
});

// GET /activities/:id - Retrieve a single activity by ID
app.get('/activities/:id', (req, res) => {
    const activity = findActivityById(req.params.id);
    if (activity) {
        res.json(activity);
    } else {
        res.status(404).json({ message: 'Activity not found' });
    }
});

// POST /activities - Add a new health activity
app.post('/activities', (req, res) => {
    const { description, duration, calories, date, category } = req.body;
    const newActivity = {
        id: activities.length + 1,
        description,
        duration,
        calories,
        date,
        category,
    };
    activities.push(newActivity);
    res.status(201).json(newActivity);
});

// PUT /activities/:id - Update an existing activity by ID
app.put('/activities/:id', (req, res) => {
    const activity = findActivityById(req.params.id);
    if (activity) {
        const { description, duration, calories, date, category } = req.body;
        activity.description = description || activity.description;
        activity.duration = duration || activity.duration;
        activity.calories = calories || activity.calories;
        activity.date = date || activity.date;
        activity.category = category || activity.category;
        res.json(activity);
    } else {
        res.status(404).json({ message: 'Activity not found' });
    }
});

// DELETE /activities/:id - Delete an activity by ID
app.delete('/activities/:id', (req, res) => {
    const activityIndex = activities.findIndex(act => act.id === parseInt(req.params.id));
    if (activityIndex !== -1) {
        activities.splice(activityIndex, 1);
        res.json({ message: 'Activity deleted successfully' });
    } else {
        res.status(404).json({ message: 'Activity not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
