const parseLine = (s: string) => {
  return s.split(/(?:-|\s|:\s)/);
};

const parseInput = (input: string) => {
  const lines = input.split(/\n/);

  const parsedLines = lines.map(parseLine);
  return parsedLines;
};

const isPasswordValid = (parsedLine: string[]) => {
  const min = Number(parsedLine[0]);
  const max = Number(parsedLine[1]);
  const numOccurences = parsedLine[3].split(parsedLine[2]).length - 1;
  return numOccurences >= min && numOccurences <= max;
};

const getNumOfValidPasswords = (input: string) => {
  const passwordCheckStatuses = parseInput(input).map(isPasswordValid);
  return passwordCheckStatuses.filter((x) => x).length;
};

export { parseLine, getNumOfValidPasswords };
