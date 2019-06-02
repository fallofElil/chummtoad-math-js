const CONSTANTS = require('../constants');
//const EPS = Math.abs((CONSTANTS.B - CONSTANTS.A) / (CONSTANTS.N - 1));

const func = require('../functions');

let xN = 0;
let i = 22;

const calcMin = (x) => {
    xN = x - func.variant1(x) / func.variant1_deriv1(x);

    /*console.log(`EPS = ${EPS} | f'(x) = ${func.variant1_deriv1(x)} | f''(x) = ${func.variant1_deriv2(x)} | xN = ${xN}`);
    console.log(func.variant1_deriv1(x) / func.variant1_deriv2(x));
    console.log(`x = ${x} | xN = ${xN} (${typeof(xN)}) | ${Math.abs(xN - x)}`);
    console.log(!(Math.abs(xN - x) < EPS));*/

    //if (!(Math.abs(xN - x) < EPS)) {
    while (i > 0) {
        i--;
        if (xN >= -1 && xN <= 0) {
            console.log(`i = ${i} | x = ${x} | xN = ${xN}`);
        }
        calcMin(xN);
    } //else console.log(`Всё заебись, x = ${xN}`);
};

calcMin(CONSTANTS.A);