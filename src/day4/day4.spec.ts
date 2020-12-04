import {
  parseFileIntoPassports, areReqFieldsPresent, arePassportValuesValid
} from "./day4";

describe("day 4 puzzle 1", () => {
  const testPassports = parseFileIntoPassports("inputs/day4/testInput.txt");

  describe("areReqFieldsPresent", () => {
    it("test passport 1 - valid", () => {
      const input = testPassports[0];

      const result = areReqFieldsPresent(input);
      expect(result).toBe(true);
    });

    it("test passport 2 - invalid", () => {
      const input = testPassports[1];

      const result = areReqFieldsPresent(input);
      expect(result).toBe(false);
    });

    it("test passport 3 - valid", () => {
      const input = testPassports[2];

      const result = areReqFieldsPresent(input);
      expect(result).toBe(true);
    });

    it("test passport 4 - invalid", () => {
      const input = testPassports[3];

      const result = areReqFieldsPresent(input);
      expect(result).toBe(false);
    });
  });
});

describe("day 4 puzzle 2", () => {
  describe("valid passports", () => {
    it("all passports should return true", () => {
      const testValidPassports = parseFileIntoPassports("inputs/day4/validpp.txt");

      for (const input of testValidPassports) {
        const result = arePassportValuesValid(input);
        expect(result).toBe(true);
      }
    });

    it("all passports should return false", () => {
      const testInvalidPassports = parseFileIntoPassports("inputs/day4/invalidpp.txt");

      for (const input of testInvalidPassports) {
        const result = arePassportValuesValid(input);
        expect(result).toBe(false);
      }
    });
  });
});