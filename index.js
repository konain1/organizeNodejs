

const express = require('express')
const mongose = require('mongoose')

// mongose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/').then(()=>{
//     console.log('databse connected')
// })


const router = require('./routes/route')
// const {adminRoute} = require('./controller/app')
const app = express();

app.use(express.json())

app.use('/',router)
app.use('/',router)

// app.get('/',(req,res)=>{
//     res.json({msg:'get method'})
// })
// app.get('/',adminRoute)


app.listen(9000,()=>{console.log(`server running on 9000`)})