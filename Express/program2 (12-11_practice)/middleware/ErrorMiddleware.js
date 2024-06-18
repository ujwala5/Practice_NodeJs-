const ErrorMiddleware = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    const isFunction = error.isFunction;
    // const path = error.path || '';
    console.log(status + ' ' + message + ' ');
    if (isFunction) {
        return error;
    } else {
        res.status(status).json({ error: message });

    }
};

//please create error middleware for function

module.exports = { ErrorMiddleware };