const funOne = (next) => {
    try {
        next(null, 'one');
    } catch (err) {
        next('funOne Error : ' + err.message, null);
    }
};

const funTwo = (next) => {
    try {
        next(null, 'two');
    } catch (err) {
        next('funTwo Error : ' + err.message, null);
    }
};

const funThree = (next) => {
    try {
        next2(null, 'three');
    } catch (err) {
        next('funThree Error' + err.message, null);
    }
};

module.exports = { funOne, funTwo, funThree };