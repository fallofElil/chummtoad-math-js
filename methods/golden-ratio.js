const CONSTANTS = require('../constants');
const EPS = Math.abs((CONSTANTS.B - CONSTANTS.A) / (CONSTANTS.N - 1));

const func = require('../functions');

const calcY = (a, b) => a + 0.382 * (b - a);
const calcZ = (a, b) => a + b - calcY(a, b);
const calcDelta = (a, b) => Math.abs(a - b);

const calcMin = (a, b) => {

    let f_y = func.variant1(calcY(a, b));
    let f_z = func.variant1(calcZ(a, b));

    if (f_y <= f_z) {
        console.log("Вошёл в ветку f_y <= f_z");

        let aH = a,
            bH = calcZ(a, b),
            yH = aH + bH - calcY(a, b),
            zH = calcY(a, b);

        if (calcDelta(aH, bH) <= EPS) {
            console.log(`Всё заебись. aH = ${aH} | bH = ${bH}`);
            console.log("Середина интервала: " + ((aH + bH) / 2));

        } else if (calcDelta(aH, bH) > EPS) {
            console.log(`Хуйня, давай снова. aH = ${aH} | bH = ${bH}`);
            calcMin(aH, bH);
        }

    } else if (f_y > f_z) {
        console.log("Вошёл в ветку f_y > f_z");

        let aH = calcY(a, b),
            bH = b,
            yH = calcZ(a, b),
            zH = aH + bH - calcZ(a, b);

        if (calcDelta(aH, bH) <= EPS) {
            console.log(`Всё заебись. aH = ${aH} | bH = ${bH}`);
            console.log("Середина интервала: " + ((aH + bH) / 2));

        } else if (calcDelta(aH, bH) > EPS) {
            console.log(`Хуйня, давай снова. aH = ${aH} | bH = ${bH}`);
            calcMin(aH, bH);
        }
    }
};

calcMin(CONSTANTS.A, CONSTANTS.B);