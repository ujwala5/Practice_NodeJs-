const classCalculation = require('./Others/classCalculation');

async function main() {
    let a = 10;
    let b = 5;

    console.log(`A = ${a} and B = ${b}`);

    const ClassCalculation = new classCalculation(a, b);
    await ClassCalculation.calculation();
}

main();