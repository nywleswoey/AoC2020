const { helpers, day14 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day14/puzzleInput.txt");
console.log(day14.findSumOfAddresses(testInput));
