import { readFile } from "../helper";
import { findDifferenceDistribution, findPermutations } from './day10';


describe("day 10", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day10/testInput.txt").map(Number);

      const result = findDifferenceDistribution(input);
      expect(result[0]).toBe(7);
      expect(result[1]).toBe(0);
      expect(result[2]).toBe(5);
    });

    it("test 2", () => {
      const input = readFile("inputs/day10/testInput2.txt").map(Number);

      const result = findDifferenceDistribution(input);
      expect(result[0]).toBe(22);
      expect(result[1]).toBe(0);
      expect(result[2]).toBe(10);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = readFile("inputs/day10/testInput.txt").map(Number);

      const result = findPermutations(input);
      expect(result).toBe(8);
    });

    it("test 2", () => {
      const input = readFile("inputs/day10/testInput2.txt").map(Number);

      const result = findPermutations(input);
      expect(result).toBe(19208);
    });
  });
});