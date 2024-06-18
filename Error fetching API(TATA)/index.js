const express = require('express');
const { fn_test_function } = require('./test.service');
const app = express();
const port = 3000;


fn_test_function();

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});