import { readFile } from "../helper";
import { findManhattanDistance, findManhattanDistance2 } from './day12';


describe("day 12", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day12/testInput.txt");

      const result = findManhattanDistance(input);
      expect(result).toBe(25);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = readFile("inputs/day12/testInput.txt");

      const result = findManhattanDistance2(input);
      expect(result).toBe(286);
    });
  });
});