const { helpers, day12 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day12/puzzleInput.txt");

let input = testInput;
console.log(day12.findManhattanDistance(input));

console.log(day12.findManhattanDistance2(input));
