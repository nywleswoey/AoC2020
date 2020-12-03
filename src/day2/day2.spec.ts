import { readFile } from "../helper";
import {
  parseLine,
  getNumOfValidPasswords,
  getNumOfValidPasswords2,
} from "./day2";

const testInput = readFile("inputs/day2/testInput.txt");

describe("day 2 puzzle 1", () => {
  describe("parseLine", () => {
    it("should return ['1','3','a','abcde'] when given '1-3 a: abcde'", () => {
      const input = testInput[0];

      const result = parseLine(input);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe("1");
      expect(result[1]).toBe("3");
      expect(result[2]).toBe("a");
      expect(result[3]).toBe("abcde");
    });

    it("should return ['1','3','b','cdefg'] when given '1-3 b: cdefg'", () => {
      const input = testInput[1];

      const result = parseLine(input);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe("1");
      expect(result[1]).toBe("3");
      expect(result[2]).toBe("b");
      expect(result[3]).toBe("cdefg");
    });

    it("should return ['1','3','c','ccccccccc'] when given '2-9 c: ccccccccc'", () => {
      const input = testInput[2];

      const result = parseLine(input);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe("2");
      expect(result[1]).toBe("9");
      expect(result[2]).toBe("c");
      expect(result[3]).toBe("ccccccccc");
    });
  });

  describe("getNumOfValidPasswords", () => {
    it("should return 2 when given the test input", () => {
      const result = getNumOfValidPasswords(testInput);
      expect(result).toBe(2);
    });
  });
});

describe("day 2 puzzle 2", () => {
  describe("getNumOfValidPasswords2", () => {
    it("should return 2 when given the test input", () => {
      const result = getNumOfValidPasswords2(testInput);
      expect(result).toBe(1);
    });
  });
});
