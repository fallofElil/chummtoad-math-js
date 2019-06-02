const CONSTANTS = require('../constants');

const func = require('../functions');

//const K = (Math.sqrt(5) + 1) / 2;

/*let x1 = Math.random() * (CONSTANTS.B - CONSTANTS.A) + CONSTANTS.A;
let x2 = Math.random() * (CONSTANTS.B - CONSTANTS.A) + CONSTANTS.A;
let x3 = Math.random() * (CONSTANTS.B - CONSTANTS.A) + CONSTANTS.A;


let arr = [];
arr.push(x1);
arr.push(x2);
arr.push(x3);

arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});

x1 = arr[0];
x2 = arr[1];
x3 = arr[2];

console.log(`
    x1 = ${x1}
    x2 = ${x2}
    x3 = ${x3}`
);*/

let x0 = Math.random() * (CONSTANTS.B - CONSTANTS.A) + CONSTANTS.A;
const h = (Math.random() * (CONSTANTS.B - CONSTANTS.A) + CONSTANTS.A) * 0.01;
console.log(h);

let i = CONSTANTS.N;
const calcMin = (x0, h) => {
    let x = x0;
    while (i > 0) {
        i--;
        x = x - h * (func.variant1(x + h) - func.variant1(x - h)) /
            (2 * (func.variant1(x + h) + func.variant1(x - h) - 2 * func.variant1(x)));
        console.log(x);
    }
};

calcMin(x0, h);