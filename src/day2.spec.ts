import { parseLine } from "./day2";

describe("day 2 puzzle 1", () => {
  describe("parseLine", () => {
    it("should return ['1','3','a','abcde'] when given '1-3 a: abcde'", () => {
      const testInput = "1-3 a: abcde";

      const result = parseLine(testInput);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe("1");
      expect(result[1]).toBe("3");
      expect(result[2]).toBe("a");
      expect(result[3]).toBe("abcde");
    });

    it("should return ['1','3','b','cdefg'] when given '1-3 b: cdefg'", () => {
      const testInput = "1-3 b: cdefg";

      const result = parseLine(testInput);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe("1");
      expect(result[1]).toBe("3");
      expect(result[2]).toBe("b");
      expect(result[3]).toBe("cdefg");
    });

    it("should return ['1','3','c','ccccccccc'] when given '2-9 c: ccccccccc'", () => {
      const testInput = "2-9 c: ccccccccc";

      const result = parseLine(testInput);
      expect(result).toHaveLength(4);
      expect(result[0]).toBe("2");
      expect(result[1]).toBe("9");
      expect(result[2]).toBe("c");
      expect(result[3]).toBe("ccccccccc");
    });
  });
});
