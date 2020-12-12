const { helpers, day11 } = require("../dist/index");

const testInput = helpers.readFileInto2DCharArray("inputs/day11/puzzleInput.txt");

let input = testInput;
console.log(day11.findNumOccupiedSeatsInEquilibrium(input));

console.log(day11.findNumOccupiedSeatsInEquilibrium2(input));
