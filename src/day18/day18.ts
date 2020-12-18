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

const getOperandBefore = (input: string) => {
  let level = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    let token = input[i];
    if (token === ('(')) {
      if (level === 0) {
        return input.slice(i + 1);
      }
      level--;
    } else if (token === ' ') {
      if (level === 0) {
        return input.slice(i);
      }
    } else if (token === ')') {
      level++;
    }
  }
  return input;
}

const readValue2 = (input: string) => {
  let i = 0;
  let level = 0;
  for (let i = 0; i < input.length; i++) {
    let token = input[i];
    if (token === ('(')) {
      level++;
    } else if (token === ' ') {
      if (level === 0) {
        return [input.slice(0, i), input.slice(i)];
      }
    } else if (token === ')') {
      if (level === 0) {
        return [input.slice(0, i), input.slice(i)];
      }
      level--;
    }
  }
  return [input, ''];
}

const evaluate2 = (input: string): number => {
  let plusIndex = input.indexOf('+');
  if (plusIndex < 0) {
    return evaluate(input);
  }

  const firstOpStr = getOperandBefore(input.slice(0, plusIndex - 1)).trim();
  let result = readValue2(input.slice(plusIndex + 2));
  const secondOpStr = result[0];

  let currentValue = evaluate2(firstOpStr) + evaluate2(secondOpStr);
  let newStr = input.slice(0, plusIndex - 1 - firstOpStr.length) + currentValue.toString() + result[1];

  return evaluate2(newStr);
}

export { evaluate, evaluate2 };