
const express = require('express')
const Router = express.Router();
const bodyParser = require('body-parser');

const app = express()
const {adminRoute,userRoute,allCourses,allUsers,coursePurchased} = require('../controller/app')
const {adminMiddleware,userMiddleware,PurchasedMiddleware} = require('../middleware/adminMiddleware')
// const {userMiddleware,PurchasedMiddleware} = require('../middleware/userMiddleware')

app.use(express.json())
app.use(bodyParser.json());

Router.get('/user',allUsers )
Router.get('/admin',adminRoute)
Router.get('/courses',allCourses)
Router.post('/admin',adminMiddleware,adminRoute)
Router.post('/user',userMiddleware,userRoute)
Router.post('/purchased/:id',PurchasedMiddleware,coursePurchased)


module.exports = Router