import { readFile } from "../helper";
import { findAccBeforeLoop } from './day8';

describe("day 8 puzzle 1", () => {
  describe("findAccBeforeLoop", () => {
    it("test 1", () => {
      const instructions = readFile("inputs/day8/testInput.txt");
      const result = findAccBeforeLoop(instructions);
      expect(result).toBe(5);
    });
  });
});