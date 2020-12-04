const aoc2020 = require("../dist/index");

const testInput = aoc2020.parseFileIntoPassports("inputs/day4/puzzleInput.txt");

console.log(testInput.filter(aoc2020.isPassportValid).length);