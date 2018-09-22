module.exports = function solveEquation(equation) {
    let vars = equation.match('(-?\\d+) \\* x\\^2 ([+-] \\d+) \\* x ([+-] \\d+)');
    let a = vars[1];
    let b = vars[2].replace(" ", "");
    let c = vars[3].replace(" ", "");
    let D = b * b - 4 * a * c;
    let x1 = Math.round((-b - Math.sqrt(D)) / (2*a));
    let x2 = Math.round((-b + Math.sqrt(D)) / (2*a));
    return [x1, x2].sort()
}
