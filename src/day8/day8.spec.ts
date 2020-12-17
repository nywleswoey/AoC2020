import { readFile } from "../helper";
import { findAccBeforeLoop, findAccAfterProgEnd } from './day8';

describe("day 8", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const instructions = readFile("inputs/day8/testInput.txt");
      const result = findAccBeforeLoop(instructions);
      expect(result[0]).toBe(5);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const instructions = readFile("inputs/day8/testInput.txt");
      const result = findAccAfterProgEnd(instructions);
      expect(result).toBe(8);
    });
  });
});