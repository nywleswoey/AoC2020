const { helpers, day2 } = require("../dist/index");

const testInput = helpers.readFile("inputs/day2/puzzleInput.txt");

console.log(day2.getNumOfValidPasswords(testInput));
console.log(day2.getNumOfValidPasswords2(testInput));
