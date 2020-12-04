import { readFile } from '../helper';

const parseFileIntoPassports = (path: string) => {
  const lines = readFile(path);

  // used to consolidate lines into passport
  const passports: string[] = [];
  let passport = ''
  for (const line of lines) {
    if (line === '') {
      passports.push(passport);
      passport = '';
    } else {
      passport = passport + ' ' + line;
    }
  }
  passports.push(passport);

  return passports;
}

export { parseFileIntoPassports };