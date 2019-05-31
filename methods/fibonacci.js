const CONSTANTS = require('../constants');

const func = require('../functions');

const arr_f = [0, 1];

for (let i = 2; i <= CONSTANTS.N; i++) {
    arr_f.push(arr_f[i - 1] + arr_f[i - 2]);
}

const calcYZ = (a, b, fNum, fDen) => a + fNum / fDen * (b - a);

let k = 0;
const calcMin = (a, b) => {
    let yK = calcYZ(a, b, arr_f[CONSTANTS.N - 2], arr_f[CONSTANTS.N]);
    let zK = calcYZ(a, b, arr_f[CONSTANTS.N - 1], arr_f[CONSTANTS.N]);

    let f_y = func.variant1(yK);
    let f_z = func.variant1(zK);

    if (f_y <= f_z) {
        console.log("Вошёл в ветку f_y <= f_z");

        let aH = a,
            bH = zK,
            zH = yK,
            yH = calcYZ(aH, bH, arr_f[CONSTANTS.N - k - 3], arr_f[CONSTANTS.N - k - 1])

        if (k !== CONSTANTS.N - 3) {
            console.log(`k = ${k} херня, нужно больше точности. Твоё дерьмо a = ${aH} | b = ${bH}`);
            k++;
            calcMin(aH, bH);
        } else {
            console.log(`k = ${k} всё заебок. Твоё дерьмо a = ${aH} | b = ${bH}`)
        }

    } else if (f_y > f_z) {
        console.log("Вошёл в ветку f_y > f_z");

        let aH = yK,
            bH = b,
            yH = zK,
            zH = calcYZ(aH, bH, arr_f[CONSTANTS.N - k - 2], arr_f[CONSTANTS.N - k - 1]);

        if (k !== CONSTANTS.N - 3) {
            console.log(`k = ${k} херня, нужно больше точности. Твоё дерьмо a = ${aH} | b = ${bH}`);
            k++;
            calcMin(aH, bH);
        } else {
            console.log(`k = ${k} всё заебок. Твоё дерьмо a = ${aH} | b = ${bH}`)
            console.log(`b - a = ${Math.abs(bH - aH)} | F22 = ${1 / arr_f[22]}`);
        }
    }
};

calcMin(CONSTANTS.A, CONSTANTS.B);