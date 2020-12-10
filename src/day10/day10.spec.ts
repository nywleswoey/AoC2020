import { readFile } from "../helper";
import { findDifferenceDistribution } from './day10';


describe("day 10 puzzle 1", () => {
  describe("findDifferenceDistribution", () => {
    it("test 1", () => {
      const input = readFile("inputs/day10/testInput.txt").map(Number);

      const result = findDifferenceDistribution(input);
      console.log(result);
      expect(result[0]).toBe(7);
      expect(result[1]).toBe(0);
      expect(result[2]).toBe(5);
    });

    it("test 2", () => {
      const input = readFile("inputs/day10/testInput2.txt").map(Number);

      const result = findDifferenceDistribution(input);
      console.log(result);
      expect(result[0]).toBe(22);
      expect(result[1]).toBe(0);
      expect(result[2]).toBe(10);
    });
  });
});