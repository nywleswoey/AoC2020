import { readFile } from "../helper";
import { findInvalidNumber, findSumOfMinMaxInContiguousBlock } from './day9';

const input = readFile("inputs/day9/testInput.txt").map(Number);

describe("day 9 puzzle 1", () => {
  describe("findInvalidNumber", () => {
    it("test 1", () => {
      const result = findInvalidNumber(input, 5);
      expect(result).toBe(127);
    });
  });
});

describe("day 9 puzzle 2", () => {
  describe("findSumOfMinMaxInContiguousBlock", () => {
    it("test 1", () => {
      const result = findSumOfMinMaxInContiguousBlock(input, 127);
      expect(result).toBe(62);
    });
  });
});