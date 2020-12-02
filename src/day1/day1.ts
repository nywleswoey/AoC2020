const findProductFor2 = (inputs: number[], expectedSum: number) => {
  const seenNumbers = new Map<number, boolean>();

  for (const input of inputs) {
    const complementNumber = expectedSum - input;
    if (seenNumbers.get(complementNumber)) {
      return input * complementNumber;
    }
    seenNumbers.set(input, true);
  }
};

const findProductFor3 = (inputs: number[]) => {
  for (let i = 0; i < inputs.length; i++) {
    const currentNum = inputs[i];
    const productFor2 = findProductFor2(inputs.slice(i), 2020 - currentNum);
    if (productFor2 !== undefined) {
      return currentNum * productFor2;
    }
  }
};

export { findProductFor2, findProductFor3 };
