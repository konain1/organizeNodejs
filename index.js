

const express = require('express')

const router = require('./routes/route')
// const {adminRoute} = require('./controller/app')
const app = express();

app.use('/',router)
app.use('/',router)

// app.get('/',(req,res)=>{
//     res.json({msg:'get method'})
// })
// app.get('/',adminRoute)


app.listen(9000,()=>{console.log(`server running on 9000`)})