const A = -1,
      B = 0,
      N = 22,
      Eps = (B - A) / (N - 1);

let func = (x) => Math.pow(x, 2) + 6 * (Math.pow(Math.E, (0.15 * x)));

//----------------------------------------------------------------------

function goldenRatio(a, b, Eps) {
    let calcY0 = (a0, b0) => a0 + 0.382 * (b0 - a0);

    let calcZ0 = (a0, b0) => a0 + b0 - calcY0(a0, b0);

    //Шаг 4
    let func_y0 = func(calcY0(a, b));
    let func_z0 = func(calcZ0(a, b));

    //Шаг 5
    if (func_y0 <= func_z0) {
        console.log("Вошёл в блок y0 <= z0");
        let a1 = a,
            b1 = calcZ0(a, b),
            y1 = a1 + b1 - calcY0(a, b),
            z1 = calcY0(a, b);

        //Шаг 6
        let delta = Math.abs(a1 - b1);

        if (delta <= Eps) {
            console.log("Экстремум функции находится в промежутке [%s, %d]", a1, b1);
            console.log("Середина интервала: " + ((a1 + b1) / 2));
        } else if (delta > Eps) {
            console.log("Тобi пiзда, изучай рекурсию.")
        }
    } else if (func_y0 > func_z0) {
        console.log("Вошёл в блок y0 > z0");
        let a1 = calcY0(a, b);
            b1 = b,
            y1 = calcZ0(a, b),
            z1 = a1 + b1 - calcZ0(a, b);

        //Шаг 6
        let delta = Math.abs(a1 - b1);

        if (delta <= Eps) {
            console.log("Экстремум функции находится в промежутке [%s, %d]", a1, b1);
            console.log("Середина интервала: " + ((a1 + b1) / 2));
        } else if (delta > Eps) {
            console.log("Тобi пiзда, изучай рекурсию.")
        }
    }
}

goldenRatio(A, B, Eps);