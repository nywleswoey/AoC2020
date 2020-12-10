const { helpers, day10 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day10/puzzleInput.txt").map(Number);

const result = day10.findDifferenceDistribution(testInput);
console.log(result[0]*result[2]);