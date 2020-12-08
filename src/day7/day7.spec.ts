import { readFile } from "../helper";
import { getBagCountContainingWantedBag } from './day7';

describe("day 7 puzzle 1", () => {
  describe("getBagCountContainingWantedBag", () => {
    it("test 1", () => {
      const bagDetails = readFile("inputs/day7/testInput.txt");
      const result = getBagCountContainingWantedBag(bagDetails, 'shiny gold');
      expect(result).toBe(4);
    });
  });
});