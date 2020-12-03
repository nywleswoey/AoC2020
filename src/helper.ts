import * as fs from "fs";

const readFile = (path: string) => {
  return fs.readFileSync(path, "utf8").split("\n");
};

const readFileInto2DCharArray = (path: string) => {
  const input = fs.readFileSync(path, "utf8").split("\n");
  const width = input[0].length; // assume all rows are of the same width

  return input.map((row) => row.split(""));
};

export { readFile, readFileInto2DCharArray };
