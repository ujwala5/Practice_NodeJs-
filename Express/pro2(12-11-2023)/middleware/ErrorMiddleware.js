
// only for APIs
const ErrorMiddleware = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    const isFunction = error.isFunction;
    console.log(` ${status} =>  ${message} `.red);
    if (isFunction) {
        return error;
    }
    else {
        res.status(status).json({ error: message });
    }
}

module.exports = { ErrorMiddleware }                 
// only for APIs
const ErrorMiddleware = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';
    const isFunction = error.isFunction;
    console.log(` ${status} =>  ${message} `.red);
    if (isFunction) {
        return error;
    }
    else {
        res.status(status).json({ error: message });
    }
}

module.exports = { ErrorMiddleware }