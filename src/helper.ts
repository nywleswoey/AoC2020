import * as fs from "fs";

const readFile = (path: string) => {
  return fs.readFileSync(path, "utf8").split('\n');
};

export { readFile };
