interface ISeat {
  isOccupied: boolean;
  hasChanged: boolean;
  affectingSeatKeys: string[];
}

const getAffectingSeatKeys = (input: any[][], width: number, height: number, x: number, y: number) => {
  const result = new Array<string>();
  for (let j = -1; j <= 1; j++) {
    for (let i = -1; i <= 1; i++) {
      const coordX = x + i;
      const coordY = y + j;
      if (coordX < 0 || coordX === width || coordY < 0 || coordY === height) {
        continue;
      }

      if (coordY === y && coordX === x) {
        continue;
      }

      if (input[coordY][coordX] === 'L') {
        result.push(`${coordX},${coordY}`);
      }
    }
  }

  return result;
}

const getSeatMap = (input: string[][]) => {
  const seatMap = new Map<string, ISeat>();
  const height = input.length;
  const width = input[0].length;

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    for (let colIndex = 0; colIndex < width; colIndex++) {
      if (input[rowIndex][colIndex] === 'L') {
        seatMap.set(`${colIndex},${rowIndex}`, { isOccupied: false, hasChanged: false, affectingSeatKeys: [] });
      }
    }
  }

  for (const [key, seat] of seatMap) {
    const coords = key.split(',').map(Number);
    seat.affectingSeatKeys = getAffectingSeatKeys(input, width, height, coords[0], coords[1]);
    seatMap.set(key, seat);
  }

  return seatMap;
}

const applyRules = (seatMap: Map<string, ISeat>) => {
  const newSeatMap = new Map<string, ISeat>();
  let willChange = false;
  for (const [key, seat] of seatMap) {
    const { isOccupied, affectingSeatKeys } = seat;
    const affectingSeats = affectingSeatKeys.map(k => seatMap.get(k)!);
    let newSeat = { ...seat };
    if (isOccupied) {
      // will change if 4 or more affecting seats are occupied
      willChange = affectingSeats.filter(s => s.isOccupied).length > 3;
      newSeat = { ...newSeat, isOccupied: !willChange, hasChanged: willChange };
    } else {
      // will change if there are no affecting seats that are occupied
      willChange = affectingSeats.filter(s => s.isOccupied).length === 0;
      newSeat = { ...newSeat, isOccupied: willChange, hasChanged: willChange };
    }
    newSeatMap.set(key, newSeat);
  }

  return newSeatMap;
}

const checkSeatMap = (seatMap: Map<string, ISeat>): [number, boolean] => {
  let occupiedCount = 0, hasChanged = false;
  for (const [_, seat] of seatMap) {
    if (seat.isOccupied) {
      occupiedCount++;
    }
    hasChanged = hasChanged || seat.hasChanged;
  }
  return [occupiedCount, hasChanged];
}

const findNumOccupiedSeatsInEquilibrium = (input: string[][]) => {
  let seatMap = getSeatMap(input);

  while (true) {
    seatMap = applyRules(seatMap);
    const [occupiedCount, hasChanged] = checkSeatMap(seatMap);
    if (!hasChanged) {
      return occupiedCount;
    }
  }
}

const getAffectingSeatKeys2 = (input: any[][], width: number, height: number, x: number, y: number) => {
  const result = new Array<string>();
  let coordX = x, coordY = y, i = 0;
  let isSeatFound = false;

  while (!isSeatFound) {
    i++
    // diagonal upper left direction
    coordX = x - i;
    coordY = y - i;
    if (coordY < 0 || coordY < 0) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // up direction
    coordX = x;
    coordY = y - i;
    if (coordY < 0) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // diagonal upper right direction
    coordX = x + i;
    coordY = y - i;
    if (coordX >= width || coordY < 0) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // left direction
    coordX = x - i;
    coordY = y;
    if (coordX < 0) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // right direction
    coordX = x + i;
    coordY = y;
    if (coordX >= width) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // diagonal lower left direction
    coordX = x - i;
    coordY = y + i;
    if (coordY < 0 || coordY >= height) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // down direction
    coordX = x;
    coordY = y + i;
    if (coordY >= height) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  isSeatFound = false;
  i = 0;
  while (!isSeatFound) {
    i++
    // diagonal lower right direction
    coordX = x + i;
    coordY = y + i;
    if (coordX >= width || coordY >= height) {
      break;
    }

    if (input[coordY][coordX] === 'L') {
      result.push(`${coordX},${coordY}`);
      isSeatFound = true;
    }
  }

  return result;
}

const getSeatMap2 = (input: string[][]) => {
  const seatMap = new Map<string, ISeat>();
  const height = input.length;
  const width = input[0].length;

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    for (let colIndex = 0; colIndex < width; colIndex++) {
      if (input[rowIndex][colIndex] === 'L') {
        seatMap.set(`${colIndex},${rowIndex}`, { isOccupied: false, hasChanged: false, affectingSeatKeys: [] });
      }
    }
  }

  for (const [key, seat] of seatMap) {
    const coords = key.split(',').map(Number);
    seat.affectingSeatKeys = getAffectingSeatKeys2(input, width, height, coords[0], coords[1]);
    seatMap.set(key, seat);
  }

  return seatMap;
}

const applyRules2 = (seatMap: Map<string, ISeat>) => {
  const newSeatMap = new Map<string, ISeat>();
  let willChange = false;
  for (const [key, seat] of seatMap) {
    const { isOccupied, affectingSeatKeys } = seat;
    const affectingSeats = affectingSeatKeys.map(k => seatMap.get(k)!);
    let newSeat = { ...seat };
    if (isOccupied) {
      // will change if 5 or more affecting seats are occupied
      willChange = affectingSeats.filter(s => s.isOccupied).length > 4;
      newSeat = { ...newSeat, isOccupied: !willChange, hasChanged: willChange };
    } else {
      // will change if there are no affecting seats that are occupied
      willChange = affectingSeats.filter(s => s.isOccupied).length === 0;
      newSeat = { ...newSeat, isOccupied: willChange, hasChanged: willChange };
    }
    newSeatMap.set(key, newSeat);
  }

  return newSeatMap;
}

const findNumOccupiedSeatsInEquilibrium2 = (input: string[][]) => {
  let seatMap = getSeatMap2(input);

  while (true) {
    seatMap = applyRules2(seatMap);
    const [occupiedCount, hasChanged] = checkSeatMap(seatMap);
    if (!hasChanged) {
      return occupiedCount;
    }
  }
}

export { findNumOccupiedSeatsInEquilibrium, findNumOccupiedSeatsInEquilibrium2 };