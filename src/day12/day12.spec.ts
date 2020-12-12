import { readFile } from "../helper";
import { findManhattanDistance } from './day12';


describe("day 12 puzzle 1", () => {
  describe("findManhattanDistance", () => {
    it("test 1", () => {
      const input = readFile("inputs/day12/testInput.txt");

      const result = findManhattanDistance(input);
      expect(result).toBe(25);
    });
  });
});