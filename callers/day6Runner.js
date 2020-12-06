const aoc2020 = require("../dist/index");

const testInput = aoc2020.parseFileIntoResponseGroups(
  "inputs/day6/puzzleInput.txt"
);

const yesCounts = testInput.map(aoc2020.countNumYesPerGrp);
console.log(yesCounts.reduce((p, c) => p + c, 0));