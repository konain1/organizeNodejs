
const express = require('express')
const Router = express.Router();
const app = express()
const {adminRoute,userRoute} = require('../controller/app')

Router.get('/user',userRoute )
Router.get('/admin',adminRoute)


module.exports = Router