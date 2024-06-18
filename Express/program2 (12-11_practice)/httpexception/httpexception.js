class httpexception extends Error {
    constructor(statusCode, message, isFunction) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.isFunction = isFunction;
        console.log("this.statusCode == ", this.statusCode);
        console.log("this.message == ", this.message);
        console.log("this.isFunction == ", this.isFunction);


    }


}

module.exports = httpexception;