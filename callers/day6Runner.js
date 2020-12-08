const { day6 } = require("../dist/index");

const testInput = day6.parseFileIntoResponseGroups(
  "inputs/day6/puzzleInput.txt"
);

const yesCounts = testInput.map(day6.countNumYesPerGrp);
console.log(yesCounts.reduce((p, c) => p + c, 0));

const allYesCounts = testInput.map(day6.countNumAllYesPerGrp);
console.log(allYesCounts.reduce((p, c) => p + c, 0));
