import { readFile } from "../helper";
import { getnthNumber } from './day15';

describe("day 15", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day15/testInput.txt")[0].split(',').map(Number);
      const result = getnthNumber(input, 2020);
      expect(result).toBe(436);
    });

    it("test 2", () => {
      const input = readFile("inputs/day15/testInput2.txt")[0].split(',').map(Number);
      const result = getnthNumber(input, 2020);
      expect(result).toBe(1);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = readFile("inputs/day15/testInput.txt")[0].split(',').map(Number);
      const result = getnthNumber(input, 30000000);
      expect(result).toBe(175594);
    });

    it("test 2", () => {
      const input = readFile("inputs/day15/testInput2.txt")[0].split(',').map(Number);
      const result = getnthNumber(input, 30000000);
      expect(result).toBe(2578);
    });
  });
});