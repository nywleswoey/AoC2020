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

const isPassportValid = (passport: string) => {
  const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  const tokens = passport.split(/(?:\s|:)/)
  for (const reqField of reqFields) {
    if (!tokens.includes(reqField)) {
      return false;
    }
  }

  return true;
}

const isPassportValidV2 = (passport: string) => {
  const fields = passport.split(' ')
  const passportValue = new Map<string, string>();
  for (const field of fields) {
    const [key, value] = field.split(':');
    passportValue.set(key, value);
  }

  if (!passportValue.has('byr')) {
    return false;
  }

  const byr = Number(passportValue.get('byr'));
  if (byr < 1920 || byr > 2002) {
    return false;
  }

  if (!passportValue.has('iyr')) {
    return false;
  }
  const iyr = Number(passportValue.get('iyr'));
  if (iyr < 2010 || iyr > 2020) {
    return false;
  }

  if (!passportValue.has('eyr')) {
    return false;
  }
  const eyr = Number(passportValue.get('eyr'));
  if (eyr < 2020 || eyr > 2030) {
    return false;
  }

  if (!passportValue.has('hgt')) {
    return false;
  }
  const hgt = passportValue.get('hgt')!;
  const hgtValue = Number(hgt.substr(0, hgt.length - 2));
  const hgtUnit = hgt.substr(hgt.length - 2);
  if (hgtUnit === 'cm' && (hgtValue < 150 || hgtValue > 193)) {
    return false;
  }
  if (hgtUnit === 'in' && (hgtValue < 59 || hgtValue > 76)) {
    return false;
  }
  if (hgtUnit !== 'cm' && hgtUnit !== 'in') {
    return false;
  }

  if (!passportValue.has('hcl')) {
    return false;
  }
  const hcl = passportValue.get('hcl')!;
  if (!hcl.match(/^\#[0-9a-f]{6}$/)) {
    return false;
  }

  if (!passportValue.has('ecl')) {
    return false;
  }
  const ecl = passportValue.get('ecl')!;
  if (!ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)) {
    return false;
  }

  if (!passportValue.has('pid')) {
    return false;
  }
  const pid = passportValue.get('pid')!;
  if (!pid.match(/^[\d]{9}$/)) {
    return false;
  }

  return true;
}

export { parseFileIntoPassports, isPassportValid, isPassportValidV2 };