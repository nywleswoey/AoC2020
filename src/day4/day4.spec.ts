import {
  parseFileIntoPassports, isPassportValid
} from "./day4";

describe("day 4 puzzle 1", () => {
  const testPassports = parseFileIntoPassports("inputs/day4/testInput.txt");

  describe("isPassportValid", () => {
    it("test passport 1 - valid", () => {
      const input = testPassports[0];

      const result = isPassportValid(input);
      expect(result).toBe(true);
    });

    it("test passport 2 - invalid", () => {
      const input = testPassports[1];

      const result = isPassportValid(input);
      expect(result).toBe(false);
    });

    it("test passport 3 - valid", () => {
      const input = testPassports[2];

      const result = isPassportValid(input);
      expect(result).toBe(true);
    });

    it("test passport 4 - invalid", () => {
      const input = testPassports[3];

      const result = isPassportValid(input);
      expect(result).toBe(false);
    });
  });
});