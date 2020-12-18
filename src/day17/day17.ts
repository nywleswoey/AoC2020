interface Point {
  x: number;
  y: number;
  z: number;
}

const getNeighbours = (x: number, y: number, z: number) => {
  const neighbours = new Array<Point>();

  for (let k = -1; k < 2; k++) {
    for (let j = -1; j < 2; j++) {
      for (let i = -1; i < 2; i++) {
        if (i === 0 && j === 0 && k === 0) {
          continue;
        }

        neighbours.push({ x: x + i, y: y + j, z: z + k });
      }
    }
  }

  return neighbours;
}

const computeStatus = (x: number, y: number, z: number, pointsMap: Map<string, boolean>) => {
  const neighbours = getNeighbours(x, y, z);
  const currentStatus = pointsMap.get(`${x},${y},${z}`) ?? false;
  const neighbourStatuses = neighbours.map(n => pointsMap.get(`${n.x},${n.y},${n.z}`) ?? false);
  const numOfActiveStatuses = neighbourStatuses.filter(s => s).length;
  return currentStatus ?
    (numOfActiveStatuses === 2 || numOfActiveStatuses === 3) // remain active if only 2 or 3 active neighbours
    : numOfActiveStatuses === 3; // turn active if exactly 3 neighbours are active
}

const simulate = (pointsMap: Map<string, boolean>) => {
  const newPointsMap = new Map<string, boolean>();
  for (const [pt, _] of pointsMap) {
    const [x, y, z] = pt.split(',').map(Number);
    const neighbours = getNeighbours(x, y, z);
    for (const neighbour of neighbours) {
      newPointsMap.set(`${neighbour.x},${neighbour.y},${neighbour.z}`, false);
    }
  }

  for (const [pt, _] of newPointsMap) {
    const [x, y, z] = pt.split(',').map(Number);
    const newStatus = computeStatus(x, y, z, pointsMap);
    newPointsMap.set(pt, newStatus);
  }

  return newPointsMap;
}

const simulateCycles = (input: string[], numCycles: number) => {
  let pointsMap = new Map<string, boolean>();
  for (let y = 0; y < input.length; y++) {
    const row = input[y].split('');
    for (let x = 0; x < row.length; x++) {
      const isActive = row[x] === '#';
      pointsMap.set(`${x},${y},${0}`, isActive);
    }
  }

  for (let cycle = 0; cycle < numCycles; cycle++) {
    pointsMap = simulate(pointsMap);
  }

  return pointsMap;
}

const getActiveCount = (pointsMap: Map<string, boolean>) => {
  let count = 0;
  for (const [pt, status] of pointsMap) {
    if (status) {
      count++;
    }
  }
  return count;
}

export { simulateCycles, getActiveCount };