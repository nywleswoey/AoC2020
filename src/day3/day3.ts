const getNumTreesEncountered = (
  areaMap: string[][],
  slopeX: number,
  slopeY: number
) => {
  const width = areaMap[0].length; // assumption: all rows should have the same width

  let realX = 0;
  let treeCount = 0;
  for (let y = 0; y < areaMap.length; y += slopeY) {
    if (areaMap[y][realX] === "#") {
      treeCount++;
    }
    realX = (realX + slopeX) % width;
  }

  return treeCount;
};

export { getNumTreesEncountered };
