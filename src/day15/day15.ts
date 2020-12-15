const getnthNumber = (numbers: number[], n: number) => {
  const seenMap = new Map<number, number>();
  for (let i = 0; i < numbers.length - 1; i++) {
    seenMap.set(numbers[i], i + 1);
  }

  // game start
  let lastNum = numbers[numbers.length - 1];
  for (let i = numbers.length + 1; i <= n; i++) {
    const seenOn = seenMap.get(lastNum);
    if (seenOn === undefined) {
      seenMap.set(lastNum, i - 1)
      lastNum = 0;
    } else {
      seenMap.set(lastNum, i - 1)
      lastNum = i - 1 - seenOn;
    }
  }
  return lastNum;
}

export { getnthNumber };