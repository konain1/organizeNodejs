// Import Admin and User models from the database
const { Admin, User } = require('../model/db');

// Middleware to check if an admin already exists before creating a new one
async function adminMiddleware(req, res, next) {
    // Extract the username from request headers
    let { username } = req.headers;

    // Check if an admin with the provided username already exists
    let existence = await Admin.findOne({ username });

    try {
        if (existence) {
            // If an admin already exists, return a 403 Forbidden response
            return res.status(403).json({ msg: "Admin already exists" });
        }
        // If admin doesn't exist, proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If an error occurs, return a 404 Not Found response
        res.status(404).json({ msg: 'Internal server error' });
    }
}

// Middleware to check if a user already exists before creating a new one
async function userMiddleware(req, res, next) {
    // Extract the username from request headers
    let { username } = req.headers;

    // Check if a user with the provided username already exists
    let existence = await User.findOne({ username });

    try {
        if (existence) {
            // If a user already exists, return a 403 Forbidden response
            return res.status(403).json({ msg: "User already exists" });
        }
        // If user doesn't exist, proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If an error occurs, return a 404 Not Found response
        res.status(404).json({ msg: 'Internal server error' });
    }
}

// Middleware to check if a user exists before allowing course purchase
async function PurchasedMiddleware(req, res, next) {
    // Extract the username from request headers
    let { username } = req.headers;

    // Check if the user exists before allowing course purchase
    let existence = await User.findOne({ username });

    if (existence) {
        // If the user exists, proceed to the next middleware or route handler
        next();
    } else {
        // If the user does not exist, return a 403 Forbidden response
        return res.status(403).json({ msg: 'User does not exist; cannot purchase courses' });
    }
}

// Export the middleware functions for use in other parts of the application
module.exports = { adminMiddleware, PurchasedMiddleware, userMiddleware };
