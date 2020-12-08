const { day4 } = require("../dist/index");

const testInput = day4.parseFileIntoPassports("inputs/day4/puzzleInput.txt");

console.log(testInput.filter(day4.areReqFieldsPresent).length);

console.log(testInput.filter(day4.arePassportValuesValid).length);
