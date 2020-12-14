const convertMaskToMap = (mask: string) => {
  const replacementMap = new Map<number, string>();
  for (let i = 0; i < mask.length; i++) {
    if (mask[i] !== 'X') {
      replacementMap.set(i, mask[i])
    }
  }

  return replacementMap;
}

const applyMask = (replacementMap: Map<number, string>, bitValue: string) => {
  let bits = bitValue.split('');
  for (const [k, v] of replacementMap) {
    bits[k] = v;
  }
  return bits.join('');
}

const findSumOfAddresses = (input: string[]) => {
  const addressMap = new Map<number, number>();
  let replacementMap = new Map<number, string>();

  for (let i = 0; i < input.length; i++) {
    if (input[i].startsWith('mask')) {
      // udpate mask
      replacementMap = convertMaskToMap(input[i].replace('mask = ', ''));
    } else {
      const tokens = input[i].split('] = ');
      const memAdd = Number(tokens[0].replace('mem[', ''));
      const valueInBits = Number(tokens[1]).toString(2).padStart(36, '0');
      const valueAfterApplyingMask = applyMask(replacementMap, valueInBits);
      addressMap.set(memAdd, parseInt(valueAfterApplyingMask, 2))
    }
  }

  let sum = 0;
  for (const [k, v] of addressMap) {
    sum += v;
  }
  return sum;
}

export { findSumOfAddresses };