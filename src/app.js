// app.js - Main application file
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

const app = express(); // Create an Express application

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Register user-related routes
app.use('/api/users', userRoutes);

module.exports = app; // Export the app instance