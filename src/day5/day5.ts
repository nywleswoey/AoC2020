const getBoardingPassDetails = (s: string) => {
  const rowStr = s.substr(0, 7);
  const colStr = s.substr(7);

  const rowStrBinary = rowStr.replace(/F/g, '0').replace(/B/g, '1');
  const colStrBinary = colStr.replace(/L/g, '0').replace(/R/g, '1');

  const row = parseInt(rowStrBinary, 2);
  const col = parseInt(colStrBinary, 2);

  return [row, col, row * 8 + col];
}

export { getBoardingPassDetails };