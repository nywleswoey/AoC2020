import { findProductFor2, findProductFor3 } from "./day1";
import { readFile } from "../helper";

const testInput = readFile("inputs/day1/testInput.txt").map(Number);

describe("day 1 puzzle 1", () => {
  describe("test example", () => {
    it("should return 514579 when given the test inputs", () => {
      // expected 2 numbers: 1721, 299
      // expected product: 514579
      expect(findProductFor2(testInput, 2020)).toBe(514579);
    });
  });
});

describe("day 1 puzzle 2", () => {
  describe("test example", () => {
    it("should return 241861950 when given the test inputs", () => {
      const testInput = [1721, 979, 366, 299, 675, 1456];

      // expected 3 numbers: 979, 366, 675
      // expected product: 241861950
      expect(findProductFor3(testInput)).toBe(241861950);
    });
  });
});
