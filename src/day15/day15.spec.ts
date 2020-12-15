import { readFile } from "../helper";
import { get2020thNumber } from './day15';


describe("day 14 puzzle 1", () => {
  describe("get2020thNumber", () => {
    it("test 1", () => {
      const input = readFile("inputs/day15/testInput.txt")[0].split(',').map(Number);
      const result = get2020thNumber(input);
      expect(result).toBe(436);
    });

    it("test 2", () => {
      const input = readFile("inputs/day15/testInput2.txt")[0].split(',').map(Number);
      const result = get2020thNumber(input);
      expect(result).toBe(1);
    });
  });
});