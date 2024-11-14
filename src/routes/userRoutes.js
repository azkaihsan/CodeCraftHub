// userRoutes.js - API routes for user-related endpoints
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router(); // Create a new router

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for getting user profile (protected route)
router.get('/profile', authenticate, getUserProfile);

module.exports = router; // Export the router