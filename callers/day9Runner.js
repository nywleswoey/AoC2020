const { helpers, day9 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day9/puzzleInput.txt").map(Number);

console.log(day9.findInvalidNumber(testInput, 25));

console.log(day9.findSumOfMinMaxInContiguousBlock(testInput, 104054607));