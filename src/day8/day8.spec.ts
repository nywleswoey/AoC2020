import { readFile } from "../helper";
import { findAccBeforeLoop, findAccAfterProgEnd } from './day8';

describe("day 8 puzzle 1", () => {
  describe("findAccBeforeLoop", () => {
    it("test 1", () => {
      const instructions = readFile("inputs/day8/testInput.txt");
      const result = findAccBeforeLoop(instructions);
      expect(result[0]).toBe(5);
    });
  });
});

describe("day 8 puzzle 2", () => {
  describe("findAccAfterProgEnd", () => {
    it("test 1", () => {
      const instructions = readFile("inputs/day8/testInput.txt");
      const result = findAccAfterProgEnd(instructions);
      expect(result).toBe(8);
    });
  });
});