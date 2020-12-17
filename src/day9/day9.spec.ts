import { readFile } from "../helper";
import { findInvalidNumber, findSumOfMinMaxInContiguousBlock } from './day9';

const input = readFile("inputs/day9/testInput.txt").map(Number);

describe("day 9", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const result = findInvalidNumber(input, 5);
      expect(result).toBe(127);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const result = findSumOfMinMaxInContiguousBlock(input, 127);
      expect(result).toBe(62);
    });
  });
});