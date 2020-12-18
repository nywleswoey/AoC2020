const readValue = (input: string) => {
  let i = 0;
  let level = 0;
  for (let i = 0; i < input.length; i++) {
    let token = input[i];
    if (token === ('(')) {
      level++;
    } else if (token === ' ') {
      if (level === 0) {
        return [input.slice(0, i), input.slice(i + 1)];
      }
    } else if (token === ')') {
      level--;
    }
  }
  return [input, ''];
}

const readOp = (input: string) => {
  const op = input[0];
  return [op, input.slice(2)];
}

const evaluate = (input: string): number => {
  let result = readValue(input);
  if (result[1].length === 0) {
    if (result[0].startsWith('(')) {
      return evaluate(result[0].slice(1, result[0].length - 1));
    } else {
      return Number(result[0]);
    }
  }

  let currentValue = evaluate(result[0]);
  while (true) {
    result = readOp(result[1]);
    const op = result[0];
    result = readValue(result[1]);
    const secondOpStr = result[0];
    if (op === '+') {
      currentValue += evaluate(secondOpStr);
    } else {
      currentValue *= evaluate(secondOpStr);
    }

    if (result[1].length === 0) {
      break;
    }
  }

  return currentValue;
}

export { evaluate };