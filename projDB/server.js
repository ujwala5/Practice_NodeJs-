const express = require("express");

const app = express();
const port = 3302;

//Declare routes
const userRouter = require('./routes/user.router.js');

//use routers

app.use(userRouter);

app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});

