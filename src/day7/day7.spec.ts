import { readFile } from "../helper";
import { getBagCountContainingWantedBag, computeNumBagsInBag } from './day7';

describe("day 7", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const bagDetails = readFile("inputs/day7/testInput.txt");
      const result = getBagCountContainingWantedBag(bagDetails, 'shiny gold');
      expect(result).toBe(4);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const bagDetails = readFile("inputs/day7/testInput.txt");
      const result = computeNumBagsInBag(bagDetails, 'shiny gold');
      expect(result).toBe(32);
    });

    it("test 2", () => {
      const bagDetails = readFile("inputs/day7/testInput2.txt");
      const result = computeNumBagsInBag(bagDetails, 'shiny gold');
      expect(result).toBe(126);
    });
  });
});