const express = require('express');
const bodyParser = require('body-parser');

//local imports
const connectDb = require('./db.js')
const usersRoutes = require('./controllers/users.controller.js')

const app = express();

app.use(bodyParser.json())
app.use('/api/users', usersRoutes)

connectDb()
    .then(()=>{ 
        console.log('databse connection succeeded')
        app.listen(8080, () => console.log("app started at 3000"));
    })
    .catch(err => console.log(err))