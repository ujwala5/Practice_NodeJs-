


const main = async () => {
    console.log('Main function');
    await fun_one();
    await fun_two();
    await fun_three();
};

const fun_one = async () => {
    console.log('fun_one function');
};

const fun_two = async () => {
    let result = new Promise(function (resolve) {
        setTimeout(() => {
            resolve('fun_two function');

        }, 3000);
    });
    return result;
};

const fun_three = async () => {
    console.log('fun_three function');
};

main();