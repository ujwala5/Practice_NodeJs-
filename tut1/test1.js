// TYPE OF FUNCTION

// function main1() {
//     console.log("I am in normal function");
// }

// main1();

// const main___1 = function () {
//     console.log("I am in function declaration type");
// };

// main___1();

// const main__2 = () => {
//     console.log('I am in arrow function type');
// };

// main__2();

//****************************************************************************** */
const main = () => {
    console.log('Main function');

    fun_one();
    fun_two();
    fun_three();
};

const fun_one = () => {
    console.log('fun_one function');
};

const fun_two = () => {
    setTimeout(() => {
        console.log('fun_two function');

    }, 5000);


};

const fun_three = () => {
    console.log('fun_three function');
};

main();

