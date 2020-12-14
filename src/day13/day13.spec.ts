import { readFile } from "../helper";
import { productBusIDAndWaitTime, findTimeWhereBusArriveInSeq } from './day13';


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

describe("day 13 puzzle 2", () => {
  describe("findTimeWhereBusArriveInSeq", () => {
    it("test 1", () => {
      const input = readFile("inputs/day13/testInput.txt");
      const buses = input[1].split(',');

      const result = findTimeWhereBusArriveInSeq(buses);
      expect(result).toBe(1068781);
    });

    it("test 2", () => {
      const input = readFile("inputs/day13/testInput2.txt");
      const buses = input[0].split(',');

      const result = findTimeWhereBusArriveInSeq(buses);
      expect(result).toBe(3417);
    });
  });
});