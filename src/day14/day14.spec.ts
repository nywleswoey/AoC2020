import { readFile } from "../helper";
import { findSumOfAddresses } from './day14';


describe("day 14 puzzle 1", () => {
  describe("findSumOfAddresses", () => {
    it("test 1", () => {
      const input = readFile("inputs/day14/testInput.txt");
      const result = findSumOfAddresses(input);
      expect(result).toBe(165);
    });
  });
});