const { helpers, day8 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day8/puzzleInput.txt");

console.log(day8.findAccBeforeLoop(testInput)[0]);
