import { findProduct } from "./day1";

describe("day 1 puzzle 1", () => {
  describe("test example", () => {
    it("should return 514579 when given the test inputs", () => {
      const testInput = [1721, 979, 366, 299, 675, 1456];

      // expected 2 numbers: 1721, 299
      // expected product: 514579
      expect(findProduct(testInput)).toBe(514579);
    });
  });
});
