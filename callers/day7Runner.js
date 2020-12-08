const aoc2020 = require("../dist/index");

const testInput = aoc2020.readFile("inputs/day7/puzzleInput.txt");

console.log(aoc2020.getBagCountContainingWantedBag(testInput, "shiny gold"));

console.log(aoc2020.computeNumBagsInBag(testInput, "shiny gold"));