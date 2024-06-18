
function main() {
    // console.log('I am the best');
    let a = 10;
    let b = 5;

    // console.log(`A = ${a} AND B = ${b}`);

    funSum(a, b);
    funSub(a, b);
    funMult(a, b);
}

function funSum(a, b) {
    console.log(`${a} + ${b} = `, a + b);
}

function funSub(a, b) {
    console.log(`${a} - ${b} = `, a - b);

}

function funMult(a, b) {
    console.log(`${a} * ${b} = `, a * b);
}

main();