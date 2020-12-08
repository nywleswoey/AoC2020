const { helpers, day1 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day1/puzzleInput.txt").map(Number);

console.log(day1.findProductFor2(testInput, 2020));
console.log(day1.findProductFor3(testInput));
