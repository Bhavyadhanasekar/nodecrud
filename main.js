const express = require('express'),
     app = express();
const bodyParser = require('body-parser');
require('express-async-errors');

const db =require('./db'),
    studentRoutes=require('./controller/student.controller')

//app.use(bodyParser.json)
app.use('/api/students',studentRoutes)
app.use(bodyParser.json())

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status||500).send('something went wrong!!!')
})

const PORT = 3026;
db.query("select 1")
    .then(() => {
        console.log('db connection succeeded')
        app.listen(PORT,
            ()=> console.log('server started at :',PORT))
    })
    .catch(err => console.log('db connection failed.\n'+err))
