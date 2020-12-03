const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile("inputs/day3/puzzleInput.txt");

console.log(aoc2020.getNumTreesEncountered(testInput, 3, 1));

const slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const treeCounts = slopes.map(([x, y]) => {
  return aoc2020.getNumTreesEncountered(testInput, x, y);
});

console.log(treeCounts.reduce((p, c) => p * c, 1));
