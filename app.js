const express = require('express');
const bodyParser = require('body-parser');
const feedRoute = require('./routes/feed')


const mongoose = require('mongoose');
// const {mongoConnect} = require('./utils/database')


const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Method', 'GET, POST,PUT,PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
   next();
})


app.use('/feed', feedRoute)

mongoose.connect('mongodb+srv://admin:admin@cluster0.ozxss.mongodb.net/?retryWrites=true&w=majority')
   .then(rs => {
      app.listen(8080);
   })
// mongoConnect(() => {
//    app.listen(8080);
// })

