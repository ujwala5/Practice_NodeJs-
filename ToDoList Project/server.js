const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

const todoRoutes = require('./routes/todoRoutes.js');

app.use(bodyparser.json());
app.use(todoRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});