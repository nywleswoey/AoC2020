const findAccBeforeLoop = (instructions: string[]): [number, boolean] => {
  let accumulator = 0;
  let currIndex = 0;
  let seenIndex = new Map<number, boolean>();
  let shouldCont = true;
  let isLoop = true;

  while (shouldCont) {
    seenIndex.set(currIndex, true);
    const tokens = instructions[currIndex].split(' ');
    const op = tokens[0];
    const value = Number(tokens[1]);

    switch (op) {
      case 'acc':
        accumulator += value;
      case 'nop':
        currIndex++;
        break;
      case 'jmp':
        currIndex += value;
        break;
      default:
        throw Error(`unrecognised op:${op} at line ${currIndex}`)
    }

    if (currIndex === instructions.length) {
      shouldCont = false;
      isLoop = false;
    }

    if (seenIndex.has(currIndex)) {
      shouldCont = false;
    }
  }

  return [accumulator, isLoop];
}

export { findAccBeforeLoop };