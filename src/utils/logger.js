// logger.js - Utility for logging messages
const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
    level: 'info', // Default logging level
    format: winston.format.json(), // Log format
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to error.log
        new winston.transports.File({ filename: 'combined.log' }), // Log all messages to combined.log
    ],
});

module.exports = logger; // Export the logger instance