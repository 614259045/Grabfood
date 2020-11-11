const express = require('express');
const restaurantRouter = require('./routes/restaurant');

//creater Server
const app = express();

//Use Router
app.use('/api', restaurantRouter);

app.listen(3000, ()=>{
    console.log('Listening to post 3000');
});