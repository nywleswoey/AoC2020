const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile('inputs/day2/puzzleInput.txt');

console.log(aoc2020.getNumOfValidPasswords(testInput));
console.log(aoc2020.getNumOfValidPasswords2(testInput));
