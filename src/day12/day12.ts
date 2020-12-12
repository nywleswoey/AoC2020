const findManhattanDistance = (instructions: string[]) => {
  let north = 0, east = 0;
  let direction = 1; // 0, for north, 1, for east, 2 for south, 3 for west

  for (const instruction of instructions) {
    const action = instruction.substr(0, 1);
    const value = Number(instruction.substr(1));

    switch (action) {
      case 'N':
        north += value;
        break;
      case 'S':
        north -= value;
        break;
      case 'E':
        east += value;
        break;
      case 'W':
        east -= value;
        break;
      case 'F':
        switch (direction) {
          case 0:
            north += value;
            break;
          case 1:
            east += value;
            break;
          case 2:
            north -= value;
            break;
          case 3:
            east -= value;
            break;
          default:
        }
        break;
      case 'L':
        direction = (direction - value / 90 + 4) % 4;
        break;
      case 'R':
        direction = (direction + value / 90) % 4;
        break;
      default:
    }
  }

  return (north > 0 ? north : -north) + (east > 0 ? east : -east);
}

const findManhattanDistance2 = (instructions: string[]) => {
  let north = 0, east = 0;
  let wpNorth = 1, wpEast = 10;

  for (const instruction of instructions) {
    const action = instruction.substr(0, 1);
    const value = Number(instruction.substr(1));

    switch (action) {
      case 'N':
        wpNorth += value;
        break;
      case 'S':
        wpNorth -= value;
        break;
      case 'E':
        wpEast += value;
        break;
      case 'W':
        wpEast -= value;
        break;
      case 'F':
        north += (value * wpNorth);
        east += (value * wpEast);
        break;
      case 'L': {
        const directionChangeMagnitude = value / 90;
        const oldWpNorth = wpNorth;
        const oldWpEast = wpEast;
        switch (directionChangeMagnitude) {
          case 1:
            wpNorth = oldWpEast;
            wpEast = -oldWpNorth;
            break;
          case 2:
            wpNorth = -oldWpNorth;
            wpEast = -oldWpEast;
            break;
          case 3:
            wpNorth = -oldWpEast;
            wpEast = oldWpNorth;
            break;
          default:
        }
        break;
      }
      case 'R': {
        const directionChangeMagnitude = value / 90;
        const oldWpNorth = wpNorth;
        const oldWpEast = wpEast;
        switch (directionChangeMagnitude) {
          case 1:
            wpNorth = -oldWpEast;
            wpEast = oldWpNorth;
            break;
          case 2:
            wpNorth = -oldWpNorth;
            wpEast = -oldWpEast;
            break;
          case 3:
            wpNorth = oldWpEast;
            wpEast = -oldWpNorth;
            break;
          default:
        }
        break;
      }
      default:
    }
  }

  return (north > 0 ? north : -north) + (east > 0 ? east : -east);
}

export { findManhattanDistance, findManhattanDistance2 };