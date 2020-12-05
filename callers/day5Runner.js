const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile("inputs/day5/puzzleInput.txt");

const boardingPassDetails = testInput.map(aoc2020.getBoardingPassDetails);
const maxSeatId = boardingPassDetails.reduce((p, c) => {
  return Math.max(p, c[2]);
}, 0);
console.log(maxSeatId);

const seatIds = boardingPassDetails.map((x) => x[2]);
const sortedSeatIds = seatIds.sort((a, b) => a - b);
const offset = sortedSeatIds[0];
for (let x = 0; x < sortedSeatIds.length; x++) {
  if (sortedSeatIds[x] !== offset + x) {
    console.log(offset + x);
    break;
  }
}