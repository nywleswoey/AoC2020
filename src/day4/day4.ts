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

const areReqFieldsPresent = (passport: string) => {
  const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  const tokens = passport.split(/(?:\s|:)/)
  for (const reqField of reqFields) {
    if (!tokens.includes(reqField)) {
      return false;
    }
  }

  return true;
}

const arePassportValuesValid = (passportStr: string) => {
  if (!areReqFieldsPresent(passportStr)) {
    return false;
  }

  const validationRules = new Map<string, (value: string) => boolean>([
    ['byr', (value: string) => {
      const byr = Number(value);
      return byr >= 1920 && byr <= 2002;
    }],
    ['iyr', (value: string) => {
      const iyr = Number(value);
      return iyr >= 2010 && iyr <= 2020;
    }],
    ['eyr', (value: string) => {
      const eyr = Number(value);
      return eyr >= 2020 && eyr <= 2030;
    }], ['hgt', (value: string) => {
      const hgtValue = Number(value.substr(0, value.length - 2));
      const hgtUnit = value.substr(value.length - 2);

      if (hgtUnit !== 'cm' && hgtUnit !== 'in') {
        return false;
      }

      if (hgtUnit === 'cm') {
        return hgtValue >= 150 && hgtValue <= 193
      }

      return hgtValue >= 59 && hgtValue <= 76;
    }], ['hcl', (value: string) => {
      return !!value.match(/^\#[0-9a-f]{6}$/);
    }], ['ecl', (value: string) => {
      return !!value.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/);
    }], ['pid', (value: string) => {
      return !!value.match(/^[\d]{9}$/);
    }]
  ]);

  const fields = passportStr.split(' ')
  for (const field of fields) {
    const [key, value] = field.split(':');
    const validationFunc = validationRules.get(key);
    
    if (validationFunc !== undefined && !validationFunc(value)) {
      return false;
    }
  }
  return true;
}

export { parseFileIntoPassports, areReqFieldsPresent, arePassportValuesValid };