const findProduct = (inputs: number[]) => {
  const seenNumbers = new Map<number, boolean>();

  for (const input of inputs) {
    const complementNumber = 2020 - input;
    if (seenNumbers.get(complementNumber)) {
      return input * complementNumber;
    }
    seenNumbers.set(input, true);
  }
};

export { findProduct };
