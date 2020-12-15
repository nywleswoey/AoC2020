const { helpers, day13 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day13/puzzleInput.txt");

const time = Number(testInput[0]);
const buses = testInput[1]
  .split(",")
  .filter((x) => x !== "x")
  .map(Number);
console.log(day13.productBusIDAndWaitTime(time, buses));

console.log(day13.findTimeWhereBusArriveInSeq(testInput[1].split(",")));
