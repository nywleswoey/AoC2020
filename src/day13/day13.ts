const productBusIDAndWaitTime = (arrivalTime: number, buses: number[]) => {
  let earliestTime = 10000000000;
  let bestBus = 0;
  for (const bus of buses) {
    const earliestTime2 = (Math.floor(arrivalTime / bus) + 1) * bus;
    if (earliestTime2 < earliestTime) {
      earliestTime = earliestTime2;
      bestBus = bus;
    }
  }

  return (earliestTime - arrivalTime) * bestBus
}

/*
 * Courtesy of https://rosettacode.org/wiki/Chinese_remainder_theorem#JavaScript
 */
const mulInv = (a: number, b: number) => {
  const b0 = b;
  let [x0, x1] = [0, 1];

  if (b === 1) {
    return 1;
  }
  while (a > 1) {
    const q = Math.floor(a / b);
    [a, b] = [b, a % b];
    [x0, x1] = [x1 - q * x0, x0];
  }
  if (x1 < 0) {
    x1 += b0;
  }
  return x1;
}

const crt = (buses: number[], remainders: number[]) => {
  let sum = 0;
  const prod = buses.reduce((a, c) => a * c, 1);

  for (let i = 0; i < buses.length; i++) {
    const [ni, ri] = [buses[i], remainders[i]];
    const p = Math.floor(prod / ni);
    sum += ri * p * mulInv(p, ni);
  }
  return sum % prod;
}
/*
 * borrowed code end
 */

const findTimeWhereBusArriveInSeq = (busStrings: string[]) => {
  const buses = new Array<number>();
  const remainders = new Array<number>();
  for (let i = 0; i < busStrings.length; i++) {
    if (busStrings[i] === 'x') {
      continue;
    }
    const busTime = Number(busStrings[i]);
    buses.push(busTime);
    remainders.push(busTime - i);
  }

  return crt(buses, remainders);
}

export { productBusIDAndWaitTime, findTimeWhereBusArriveInSeq };