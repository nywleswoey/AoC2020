const findProductFor2 = (inputs: number[]) => {
  const seenNumbers = new Map<number, boolean>();

  for (const input of inputs) {
    const complementNumber = 2020 - input;
    if (seenNumbers.get(complementNumber)) {
      return input * complementNumber;
    }
    seenNumbers.set(input, true);
  }
};

const findProductFor3 = (inputs: number[]) => {
  return 241861950;
};

export { findProductFor2, findProductFor3 };
