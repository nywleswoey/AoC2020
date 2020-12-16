const { helpers, day16 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day16/puzzleInput.txt");
console.log(day16.findSumOfInvalidDigits(testInput));
