const funOne = (a, b, next) => {
    try {
        next(null, a + b);
    } catch (err) {
        next('funOne Error : ' + err.message, null);
    }
};

const funTwo = (a, b, next) => {
    try {
        next(null, a - b);
    } catch (err) {
        next('funTwo Error : ' + err.message, null);
    }
};

const funThree = (a, b, next) => {
    try {
        next(null, a * b);
    } catch (err) {
        next('funThree Error : ' + err.message, null);
    }
};

module.exports = { funOne, funTwo, funThree };