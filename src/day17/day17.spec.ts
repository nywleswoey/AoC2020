import { readFile } from "../helper";
import { simulateCycles, getActiveCount } from './day17';

describe("day 17", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day17/testInput.txt");
      const result = getActiveCount(simulateCycles(input, 6));
      expect(result).toBe(112);
    });
  });
});