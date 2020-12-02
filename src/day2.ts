const parseLine = (s: string) => {
  return s.split(/(?:-|\s|:\s)/);
};

export { parseLine };
