const isValid = (wanted: number, previousNum: number[]): boolean => {
  const seenNumbers = new Map<number, boolean>();

  for (const num of previousNum) {
    const complementNumber = wanted - num;
    if (seenNumbers.get(complementNumber)) {
      return true;
    }
    seenNumbers.set(num, true);
  }

  return false;
}

const findInvalidNumber = (input: number[], preamble: number): number => {
  for (let x = 0; x < input.length - preamble; x++) {
    const wanted = input[x + preamble];
    if (!isValid(wanted, input.slice(x, x + preamble))) {
      return wanted;
    }
  }

  return -1;
}

export { findInvalidNumber };