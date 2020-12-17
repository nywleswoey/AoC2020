import { readFileInto2DCharArray } from "../helper";
import { findNumOccupiedSeatsInEquilibrium, findNumOccupiedSeatsInEquilibrium2 } from './day11';


describe("day 11", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFileInto2DCharArray("inputs/day11/testInput.txt");

      const result = findNumOccupiedSeatsInEquilibrium(input);
      expect(result).toBe(37);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = readFileInto2DCharArray("inputs/day11/testInput.txt");

      const result = findNumOccupiedSeatsInEquilibrium2(input);
      expect(result).toBe(26);
    });
  });
});