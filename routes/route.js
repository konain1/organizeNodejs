// Import required modules and packages
const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');

// Create an instance of the Express application
const app = express();

// Import route handlers and middleware functions from the specified locations
const {
  adminRoute,
  userRoute,
  allCourses,
  allUsers,
  coursePurchased,userOwnCourses
} = require('../controller/app');

const {
  adminMiddleware,
  userMiddleware,
  PurchasedMiddleware
} = require('../middleware/adminMiddleware');

// Set up middleware to parse incoming JSON requests
app.use(express.json());

// Set up additional middleware to parse the request body using body-parser
app.use(bodyParser.json());

// Define routes using the Router instance
Router.get('/user', allUsers); // Route to get information about all users
Router.get('/admin', adminRoute); // Route to handle admin-related requests
Router.get('/courses', allCourses); // Route to get information about all courses
Router.post('/admin', adminMiddleware, adminRoute); // Route to create a new admin
Router.post('/user', userMiddleware, userRoute); // Route to create a new user
Router.post('/purchased/:id', PurchasedMiddleware, coursePurchased); // Route to handle course purchase
Router.get('/purchasedCourses',userOwnCourses)
// Export the Router instance for use in other parts of the application
module.exports = Router;
