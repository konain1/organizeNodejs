// Import User and Course models from the database
const { User, Course } = require('../model/db');

// Route to create a new user
async function userRoute(req, res) {
    // Extract username and password from request headers
    let { username, password } = req.headers;

    // Create a new user in the database
    let newUser = await User.create({
        username,
        password
    });

    // Send a JSON response indicating that a new user has been created
    res.json({ msg: "New user has been created" });
}

// Route to handle course purchase for a user
async function coursePurchased(req, res) {
    // Extract the course ID from request parameters
    let id = req.params.id;

    // Extract the username from request headers
    let username = req.body.username;

    // Find the user in the database based on the username
    let user = await User.findOne({ username });

    // Update the user document to add the purchased course ID
    await User.updateOne({ username }, { "$push": { purchasedCoursed: id } });

    // Send a response to inform the client about the success of the operation
    res.json({ msg: "Course purchased successfully" });
}

async function userOwnCourses(req,res){
    

    let {username,password} = req.headers;

    let user = await User.findOne({username})

    if(user){
        let myCourses = await Course.find({
            _id:{
                "$in":user.purchasedCoursed
            }
        })

        res.json({mypurchased:myCourses})

    }else{
        res.json({msg:'user does not exist'})
    }

    
}
// Route to get a list of all users
async function allUsers(req, res) {
    // Retrieve all users from the database
    let allUsers = await User.find();

    // Send a JSON response containing the list of users
    res.json({ users: allUsers });
}

// Route to get a list of all courses
async function allCourses(req, res) {
    // Retrieve all courses from the database
    const courses = await Course.find({});

    // Send a JSON response containing the list of courses
    res.json({ msg: courses });
}

// Route to create a new admin
async function adminRoute(req, res) {
    // Extract the username from request headers
    let username = req.headers;

    // Send a JSON response indicating that a new admin has been created
    res.json({ msg: `New admin has been created` });
}

// Export the route handlers for use in other parts of the application
module.exports = { userRoute, adminRoute, allCourses, allUsers, coursePurchased ,userOwnCourses};
