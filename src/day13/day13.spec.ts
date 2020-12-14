import { readFile } from "../helper";
import { productBusIDAndWaitTime } from './day13';


describe("day 13 puzzle 1", () => {
  describe("productBusIDAndWaitTime", () => {
    it("test 1", () => {
      const input = readFile("inputs/day13/testInput.txt");
      const time = Number(input[0]);
      const buses = input[1].split(',').filter(x => x !== 'x').map(Number);

      const result = productBusIDAndWaitTime(time, buses);
      expect(result).toBe(295);
    });
  });
});