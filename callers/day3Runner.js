const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile("inputs/day3/puzzleInput.txt");

console.log(aoc2020.getNumTreesEncountered(testInput, 3));
