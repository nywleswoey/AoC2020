import { readFile } from "../helper";
import { findInvalidNumber } from './day9';

describe("day 9 puzzle 1", () => {
  describe("findInvalidNumber", () => {
    it("test 1", () => {
      const input = readFile("inputs/day9/testInput.txt").map(Number);
      const result = findInvalidNumber(input, 5);
      expect(result).toBe(127);
    });
  });
});