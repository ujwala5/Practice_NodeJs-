
const express = require('express');

const app = express();

let port = process.env.PORT || 3000;
console.log({ port });

require('dotenv').config();
// console.log(process.env.PORT);

//ROUTER DECLARATION

const userRouter = require("./router/user.router.js");
app.use(userRouter);

app.listen(port, () => {
    console.log("App running on a port ", process.env.PORT);
});