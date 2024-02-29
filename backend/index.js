const express = require('express');
const mongoose = require('mongoose')
const {PORT, mongoDBURL} = require('./config.js');



const app = express();
console.log(mongoDBURL);

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send('Welcome to lms');
});

// Connect to MongoDB
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT} `)
    })
    // Start your Express server or perform other actions here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
