import { readFileInto2DCharArray } from "../helper";
import { findNumOccupiedSeatsInEquilibrium } from './day11';


describe("day 11 puzzle 1", () => {
  describe("findNumOccupiedSeatsInEquilibrium", () => {
    it("test 1", () => {
      const input = readFileInto2DCharArray("inputs/day11/testInput.txt");

      const result = findNumOccupiedSeatsInEquilibrium(input);
      expect(result).toBe(37);
    });
  });
});