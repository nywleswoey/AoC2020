const isValid = (num: number, rules: [string, number, number, number, number][]) => {
  for (const rule of rules) {
    if ((num >= rule[1] && num <= rule[2]) || (num >= rule[3] && num <= rule[4])) {
      return true;
    }
  }
  return false;
}

const parseRule = (line: string): [string, number, number, number, number] => {
  let tokens = line.split(': ');
  const ruleName = tokens[0];
  tokens = tokens[1].split(' ');
  const range1 = tokens[0].split('-').map(Number);
  const range2 = tokens[2].split('-').map(Number);
  return [ruleName, range1[0], range1[1], range2[0], range2[1]];
}

const findSumOfInvalidDigits = (input: string[]) => {
  const rules = new Array<[string, number, number, number, number]>();
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
        rules.push(parseRule(line));
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

const isRuleOk = (values: number[], rule: [string, number, number, number, number]) => {
  for (const value of values) {
    if ((value < rule[1] || value > rule[2]) && (value < rule[3] || value > rule[4])) {
      return false;
    }
  }
  return true;
}

const findProductOfDepartureFields = (input: string[]) => {
  let rules = new Array<[string, number, number, number, number]>();
  const validTickets = new Array<number[]>();

  // parse input
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
        rules.push(parseRule(line));
      } else {
        const tokens = line.split(',').map(Number);
        // check validity here
        let isTicketValid = true;
        for (const token of tokens) {
          if (!isValid(token, rules)) {
            isTicketValid = false;
            break;
          }
        }
        if (isTicketValid) {
          validTickets.push(tokens);
        }
      }
    }
  }

  // group numbers from all tickets by position
  let fieldValues = rules.map((_, i) => {
    return validTickets.map(t => t[i]);
  });

  let product = 1;
  let foundCount = 0;
  while (fieldValues.length > 0) {
    let remainingValues = new Array<number[]>();
    for (const fields of fieldValues) {
      const applicableRules = rules.filter(r => isRuleOk(fields, r));
      if (applicableRules.length === 1) {
        const ruleName = applicableRules[0][0];
        if (ruleName.startsWith('departure')) {
          foundCount++;
          product *= fields[0];
          if (foundCount === 6) {
            return product;
          }
        }
        rules = rules.filter(r => r[0] !== ruleName);
      } else {
        remainingValues.push(fields);
      }
    }
    fieldValues = remainingValues;
  }

  return product;
}

export { findSumOfInvalidDigits, findProductOfDepartureFields };