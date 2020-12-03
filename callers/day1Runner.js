const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile("inputs/day1/puzzleInput.txt").map(Number);

console.log(aoc2020.findProductFor2(testInput, 2020));
console.log(aoc2020.findProductFor3(testInput));
