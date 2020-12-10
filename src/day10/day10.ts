const findDifferenceDistribution = (voltages: number[]) => {
  const sortedVoltages = voltages.sort((a, b) => a - b);
  const initialDiff = sortedVoltages[0];

  const differenceArr = [0, 0, 1];
  differenceArr[initialDiff - 1] += 1

  for (let x = 0; x < sortedVoltages.length - 1; x++) {
    const diff = sortedVoltages[x + 1] - sortedVoltages[x];
    differenceArr[diff - 1] += 1
  }
  return differenceArr;
}

const findPermutations = (voltages: number[]) => {
  const sortedVoltages = voltages.sort((a, b) => a - b);
  const voltageToNumWaysMap = new Map<number, number>();
  voltageToNumWaysMap.set(0, 1);

  for (let i = 0; i < sortedVoltages.length; i++) {
    const currVoltage = sortedVoltages[i];
    const numWays = (voltageToNumWaysMap.get(currVoltage - 1) ?? 0) + (voltageToNumWaysMap.get(currVoltage - 2) ?? 0) + (voltageToNumWaysMap.get(currVoltage - 3) ?? 0);
    voltageToNumWaysMap.set(currVoltage, numWays)
  }

  return voltageToNumWaysMap.get(sortedVoltages[sortedVoltages.length - 1]);
}

export { findDifferenceDistribution, findPermutations };