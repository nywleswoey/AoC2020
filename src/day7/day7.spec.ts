import { readFile } from "../helper";
import { getBagCountContainingWantedBag, computeNumBagsInBag } from './day7';

describe("day 7 puzzle 1", () => {
  describe("getBagCountContainingWantedBag", () => {
    it("test 1", () => {
      const bagDetails = readFile("inputs/day7/testInput.txt");
      const result = getBagCountContainingWantedBag(bagDetails, 'shiny gold');
      expect(result).toBe(4);
    });
  });
});

describe("day 7 puzzle 2", () => {
  describe("computeNumBagsInBag", () => {
    it("computeNumBagsInBag test 1", () => {
      const bagDetails = readFile("inputs/day7/testInput.txt");
      const result = computeNumBagsInBag(bagDetails, 'shiny gold');
      expect(result).toBe(32);
    });

    it("computeNumBagsInBag test 2", () => {
      const bagDetails = readFile("inputs/day7/testInput2.txt");
      const result = computeNumBagsInBag(bagDetails, 'shiny gold');
      expect(result).toBe(126);
    });
  });
});