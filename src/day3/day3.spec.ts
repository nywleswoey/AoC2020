import { readFileInto2DCharArray } from "../helper";
import { getNumTreesEncountered } from "./day3";

const testInput = readFileInto2DCharArray("inputs/day3/testInput.txt");

describe("day 3", () => {
  describe("getNumTreesEncountered", () => {
    it("should return 7 when given the test input with slope 3,1", () => {
      const result = getNumTreesEncountered(testInput, 3, 1);
      expect(result).toBe(7);
    });

    it("should return 2 when given the test input with slope 1,1", () => {
      const result = getNumTreesEncountered(testInput, 1, 1);
      expect(result).toBe(2);
    });

    it("should return 3 when given the test input with slope 5,1", () => {
      const result = getNumTreesEncountered(testInput, 5, 1);
      expect(result).toBe(3);
    });

    it("should return 4 when given the test input with slope 7,1", () => {
      const result = getNumTreesEncountered(testInput, 7, 1);
      expect(result).toBe(4);
    });

    it("should return 2 when given the test input with slope 1,2", () => {
      const result = getNumTreesEncountered(testInput, 1, 2);
      expect(result).toBe(2);
    });
  });
});
