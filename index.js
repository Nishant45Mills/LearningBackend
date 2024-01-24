const express = require('express');
const route = require('./routes');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

app.use('/', route);

mongoose.connect(process.env.MONGODB_URL).then((data) => {

    console.log("db connected successfully");

    app.listen(process.env.PORT, () => {

        console.log("server is listen on port: " + process.env.PORT);
    })

})