import { readFile } from "../helper";
import { evaluate, evaluate2 } from './day18';

describe("day 18", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = readFile("inputs/day18/testInput.txt");
      const result = evaluate(input[0]);
      expect(result).toBe(231);
    });

    it("test 2", () => {
      const input = readFile("inputs/day18/testInput2.txt");
      const result = evaluate(input[0]);
      expect(result).toBe(51);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = readFile("inputs/day18/testInput.txt");
      const result = evaluate2(input[0]);
      expect(result).toBe(231);
    });

    it("test 2", () => {
      const input = readFile("inputs/day18/testInput2.txt");
      const result = evaluate2(input[0]);
      expect(result).toBe(51);
    });

    it("test 3", () => {
      const input = readFile("inputs/day18/testInput3.txt");
      const result = evaluate2(input[0]);
      expect(result).toBe(46);
    });

    it("test 4", () => {
      const input = readFile("inputs/day18/testInput4.txt");
      const result = evaluate2(input[0]);
      expect(result).toBe(1445);
    });

    it("test 5", () => {
      const input = readFile("inputs/day18/testInput5.txt");
      const result = evaluate2(input[0]);
      expect(result).toBe(669060);
    });

    it("test 6", () => {
      const input = readFile("inputs/day18/testInput6.txt");
      const result = evaluate2(input[0]);
      expect(result).toBe(23340);
    });
  });
});