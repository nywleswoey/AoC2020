const { helpers, day17 } = require("../dist/index");

const input = helpers.readFile("inputs/day17/puzzleInput.txt");
console.log(day17.getActiveCount(day17.simulateCycles(input, 6)));

console.log(day17.getActiveCount(day17.simulateCycles2(input, 6)));