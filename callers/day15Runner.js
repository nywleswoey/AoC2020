const { helpers, day15 } = require("../dist/index");

const testInput = helpers
  .readFile("inputs/day15/puzzleInput.txt")[0]
  .split(",")
  .map(Number);
console.log(day15.getnthNumber(testInput, 2020));

console.log(day15.getnthNumber(testInput, 30000000));
