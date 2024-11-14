// authMiddleware.js - Middleware for authentication and authorization
const jwt = require('jsonwebtoken');

/**
 * Middleware to authenticate users based on JWT
 */
exports.authenticate = (req, res, next) => {
    // Get token from authorization header
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' }); // If no token, return unauthorized
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' }); // If token is invalid, return unauthorized
        }
        req.user = decoded; // Store decoded user information in request
        next(); // Proceed to the next middleware or route handler
    });
};