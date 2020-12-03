import { readFile } from "../helper";
import { getNumTreesEncountered } from "./day3";

const testInput = readFile("inputs/day3/testInput.txt");

describe("day 3 puzzle 1", () => {
  describe("getNumTreesEncountered", () => {
    it("should return 7 when given the test input", () => {
      const result = getNumTreesEncountered(testInput, 3);
      expect(result).toBe(7);
    });
  });
});