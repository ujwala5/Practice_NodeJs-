const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3301;
let userRouter = require('./routes/userDetail_router');
let accountRouter = require('./routes/account.router');
let roleRouter = require('./routes/role_router');
let userMapRole = require('./routes/user_role_map');
let accountUserMap = require('./routes/Account.user.map.router');
let companyLocationRouter = require('./routes/campanyLocation.router');
let partsRouter = require('./routes/parts.router.js');
let customerDetails = require('./routes/customerDetails.router.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(userRouter);
app.use(accountRouter);
app.use(roleRouter);
app.use(userMapRole);
app.use(accountUserMap);
app.use(companyLocationRouter);
app.use(partsRouter);
app.use(customerDetails);


app.listen(port, () => {
    console.log('App running on port ' + port);
});

