import { countNumYesPerGrp, countNumAllYesPerGrp } from './day6';

describe("day 6", () => {
  describe("puzzle 1", () => {
    it("test 1", () => {
      const input = ['abc'];

      const result = countNumYesPerGrp(input);
      expect(result).toBe(3);
    });

    it("test 2", () => {
      const input = ['a', 'b', 'c'];

      const result = countNumYesPerGrp(input);
      expect(result).toBe(3);
    });

    it("test 3", () => {
      const input = ['ab', 'ac'];

      const result = countNumYesPerGrp(input);
      expect(result).toBe(3);
    });

    it("test 4", () => {
      const input = ['a', 'a', 'a', 'a'];

      const result = countNumYesPerGrp(input);
      expect(result).toBe(1);
    });

    it("test 5", () => {
      const input = ['b'];

      const result = countNumYesPerGrp(input);
      expect(result).toBe(1);
    });
  });

  describe("puzzle 2", () => {
    it("test 1", () => {
      const input = ['abc'];

      const result = countNumAllYesPerGrp(input);
      expect(result).toBe(3);
    });

    it("test 2", () => {
      const input = ['a', 'b', 'c'];

      const result = countNumAllYesPerGrp(input);
      expect(result).toBe(0);
    });

    it("test 3", () => {
      const input = ['ab', 'ac'];

      const result = countNumAllYesPerGrp(input);
      expect(result).toBe(1);
    });

    it("test 4", () => {
      const input = ['a', 'a', 'a', 'a'];

      const result = countNumAllYesPerGrp(input);
      expect(result).toBe(1);
    });

    it("test 5", () => {
      const input = ['b'];

      const result = countNumAllYesPerGrp(input);
      expect(result).toBe(1);
    });
  });
});