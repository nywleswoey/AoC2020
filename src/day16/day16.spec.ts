import { readFile } from "../helper";
import { findSumOfInvalidDigits } from './day16';

describe("day 16", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day16/testInput.txt");
      const result = findSumOfInvalidDigits(input);
      expect(result).toBe(71);
    });
  });
});