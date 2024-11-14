javascript
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

module.exports = app;