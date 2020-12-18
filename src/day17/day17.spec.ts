import { readFile } from "../helper";
import { simulateCycles, simulateCycles2, getActiveCount } from './day17';

describe("day 17", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day17/testInput.txt");
      const result = getActiveCount(simulateCycles(input, 6));
      expect(result).toBe(112);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = readFile("inputs/day17/testInput.txt");
      const result = getActiveCount(simulateCycles2(input, 6));
      expect(result).toBe(848);
    });
  });
});