module.exports.variant1 = (x) => Math.pow(x, 2) + 6 * (Math.pow(Math.E, (0.15 * x)));
module.exports.variant1_deriv1 = (x) => 2 * x + 0.9 * (Math.pow(Math.E, (0.15 * x)));
module.exports.variant1_deriv2 = (x) => 0.135 * x * (Math.pow(Math.E, (0.15 * x)));