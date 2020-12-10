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

export { findDifferenceDistribution };