import { getBoardingPassDetails } from './day5';

describe("day 5 puzzle 1", () => {
  describe("getBoardingPassDetails", () => {
    it("test 1", () => {
      const input = 'BFFFBBFRRR';

      const result = getBoardingPassDetails(input);
      expect(result[0]).toBe(70);
      expect(result[1]).toBe(7);
      expect(result[2]).toBe(567);
    });

    it("test 2", () => {
      const input = 'FFFBBBFRRR'

      const result = getBoardingPassDetails(input);
      expect(result[0]).toBe(14);
      expect(result[1]).toBe(7);
      expect(result[2]).toBe(119);
    });

    it("test 3", () => {
      const input = 'BBFFBBFRLL';

      const result = getBoardingPassDetails(input);
      expect(result[0]).toBe(102);
      expect(result[1]).toBe(4);
      expect(result[2]).toBe(820);
    });
  });
});