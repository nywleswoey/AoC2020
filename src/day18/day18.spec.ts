import { readFile } from "../helper";
import { evaluate } from './day18';

describe("day 18", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day18/testInput.txt");
      const result = evaluate(input[0]);
      expect(result).toBe(231);
    });

    it("test 2", () => {
      const input = readFile("inputs/day18/testInput2.txt");
      const result = evaluate(input[0]);
      expect(result).toBe(51);
    });
  });
});