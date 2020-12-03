const getNumTreesEncountered = (
  input: string[],
  slopeX: number,
  slopeY: number
) => {
  const width = input[0].length; // assume all rows are of the same width

  const areaMap = input.map((row) => {
    const rowMap = new Array(width);
    for (let x = 0; x < width; x++) {
      rowMap[x] = row[x] === "#";
    }
    return rowMap;
  });

  let realX = 0;
  let treeCount = 0;
  for (let y = 0; y < input.length; y += slopeY) {
    if (areaMap[y][realX]) {
      treeCount++;
    }
    realX = (realX + slopeX) % width;
  }

  return treeCount;
};

export { getNumTreesEncountered };
