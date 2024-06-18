
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

let port = process.env.PORT || 3000;
console.log({ port });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();
// console.log(process.env.PORT);

//ROUTER DECLARATION

const userRouter = require("./router/user.router.js");
app.use(userRouter);

const webhookRouter = require("./router/webhook_router.js");
app.use(webhookRouter);

app.listen(port, () => {
    console.log("App running on a port ", process.env.PORT);
});