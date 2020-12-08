const { helpers, day7 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day7/puzzleInput.txt");

console.log(day7.getBagCountContainingWantedBag(testInput, "shiny gold"));

console.log(day7.computeNumBagsInBag(testInput, "shiny gold"));
