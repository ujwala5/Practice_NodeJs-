const express = require('express');
const app = express();
var colors = require('colors');
const PORT = 2000;

//routers
const userRouter = require('./routes/user.routes.js');

//route Use
app.use(userRouter);

app.listen(PORT, () => { console.log("Server running on the port ".blue, PORT); });