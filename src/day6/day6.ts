import { readFile } from '../helper';

const parseFileIntoResponseGroups = (path: string) => {
  const lines = readFile(path);

  // used to consolidate lines into passport
  const groups: string[][] = [];
  let responses: string[] = []
  for (const line of lines) {
    if (line === '') {
      groups.push(responses);
      responses = [];
    } else {
      responses.push(line);
    }
  }
  groups.push(responses);

  return groups;
}

const countNumYesPerGrp = (responses: string[]) => {
  const yesMap = new Map<string, boolean>();
  for (const r of responses) {
    const yeses = r.split('');
    for (const y of yeses) {
      yesMap.set(y, true);
    }
  }
  return yesMap.size;
}

const countNumAllYesPerGrp = (responses: string[]) => {
  const firstResponse = responses[0];
  let allYesCount = 0;

  const yeses = firstResponse.split('');

  for (const y of yeses) {
    const allYes = responses.reduce((p, c) => p && c.includes(y), true);
    allYesCount = allYes ? allYesCount + 1 : allYesCount;
  }
  return allYesCount;
}

export { parseFileIntoResponseGroups, countNumYesPerGrp, countNumAllYesPerGrp };