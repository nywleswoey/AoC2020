import { readFile } from "../helper";
import { findSumOfAddresses, findSumOfAddresses2 } from './day14';


describe("day 14 puzzle 1", () => {
  describe("findSumOfAddresses", () => {
    it("test 1", () => {
      const input = readFile("inputs/day14/testInput.txt");
      const result = findSumOfAddresses(input);
      expect(result).toBe(165);
    });
  });
});

describe("day 14 puzzle 2", () => {
  describe("findSumOfAddresses2", () => {
    it("test 1", () => {
      const input = readFile("inputs/day14/testInput2.txt");
      const result = findSumOfAddresses2(input);
      expect(result).toBe(208);
    });
  });
});