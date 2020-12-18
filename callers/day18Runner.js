const { helpers, day18 } = require("../dist/index");

const input = helpers.readFile("inputs/day18/puzzleInput.txt");
let sum = 0;
for (const line of input) {
  sum += day18.evaluate(line);
}
console.log(sum);
