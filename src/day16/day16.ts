const isValid = (num: number, rules: [number, number, number, number][]) => {
  for (const rule of rules) {
    if ((num >= rule[0] && num <= rule[1]) || (num >= rule[2] && num <= rule[3])) {
      return true;
    }
  }
  return false;
}

const findSumOfInvalidDigits = (input: string[]) => {
  const rules = new Array<[number, number, number, number]>();
  const nearByTickets = new Array<number[]>();

  let stage = 1;
  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    if (line === '') {
      continue;
    } else if (line === 'your ticket:') {
      stage = 2;
    } else if (line === 'nearby tickets:') {
      stage = 3;
    } else {
      if (stage === 1) {
        const tokens = line.split(' ');
        const range1 = tokens[1].split('-').map(Number);
        const range2 = tokens[3].split('-').map(Number);
        rules.push([range1[0], range1[1], range2[0], range2[1]]);
      } else if (stage === 3) {
        const tokens = line.split(',').map(Number);
        nearByTickets.push(tokens);
      }
    }
  }

  let invalidSum = 0;
  for (const ticket of nearByTickets) {
    for (const num of ticket) {
      if (!isValid(num, rules)) {
        invalidSum += num;
      }
    }
  }

  return invalidSum;
}

export { findSumOfInvalidDigits };