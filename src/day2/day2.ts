const parseLine = (s: string) => {
  return s.split(/(?:-|\s|:\s)/);
};

const isPasswordValid = (parsedLine: string[]) => {
  const min = Number(parsedLine[0]);
  const max = Number(parsedLine[1]);
  const numOccurences = parsedLine[3].split(parsedLine[2]).length - 1;
  return numOccurences >= min && numOccurences <= max;
};

const getNumOfValidPasswords = (input: string[]) => {
  const passwordCheckStatuses = input.map(parseLine).map(isPasswordValid);
  return passwordCheckStatuses.filter((x) => x).length;
};

const isPasswordValid2 = (parsedLine: string[]) => {
  const firstPos = Number(parsedLine[0]) - 1;
  const secondPos = Number(parsedLine[1]) - 1;
  const firstChar = parsedLine[3].charAt(firstPos);
  const secondChar = parsedLine[3].charAt(secondPos);

  return (
    firstChar !== secondChar &&
    (firstChar === parsedLine[2] || secondChar === parsedLine[2])
  );
};

const getNumOfValidPasswords2 = (input: string[]) => {
  const passwordCheckStatuses = input.map(parseLine).map(isPasswordValid2);
  return passwordCheckStatuses.filter((x) => x).length;
};

export { parseLine, getNumOfValidPasswords, getNumOfValidPasswords2 };
