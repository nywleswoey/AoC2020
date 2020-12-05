const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile("inputs/day5/puzzleInput.txt");

const boardingPassDetails = testInput.map(aoc2020.getBoardingPassDetails);
const maxSeatId = boardingPassDetails.reduce((p, c) => {
  return Math.max(p, c[2]);
}, 0);
console.log(maxSeatId);
