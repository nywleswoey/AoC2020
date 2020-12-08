const getBagCountContainingWantedBag = (bagDetails: string[], wantedBag: string) => {
  const bagDetailsArr: [string, string[]][] = [];
  bagDetails.forEach(l => {
    const tokens = l.split(' contain ');
    const key = tokens[0].replace(' bags', '');
    const value = tokens[1] === 'no other bags.'
      ? []
      : tokens[1].split(', ').map(bd => { const tokens = bd.split(' '); return `${tokens[1]} ${tokens[2]}` });

    bagDetailsArr.push([key, value]);
  });

  const containingBagMap = new Map<string, boolean>();
  const getBagsContainingBagColor = (wanted: string) => {
    // get bag colors that contains the wanted bag
    const containingBags = bagDetailsArr.filter(bd => bd[1].filter(v => v.includes(wanted)).length > 0).map(bd => bd[0]);

    if (containingBags.length === 0) {
      return;
    }

    for (const cb of containingBags) {
      containingBagMap.set(cb, true);
      getBagsContainingBagColor(cb);
    }
  }

  getBagsContainingBagColor(wantedBag);

  return containingBagMap.size;
}

const computeNumBagsInBag = (bagDetails: string[], wanted: string) => {
  const bagContentsMap = new Map<string, [number, string][]>();
  const bagContentCountMap = new Map<string, number>();

  for (const bd of bagDetails) {
    const tokens = bd.split(' contain ');
    const containerBag = tokens[0].replace(' bags', '');

    if (tokens[1] === 'no other bags.') {
      bagContentCountMap.set(containerBag, 1);
    } else {
      const bagContentDetails = tokens[1].split(', ');
      const parsedBagContents: [number, string][] = bagContentDetails.map(bcd => {
        const words = bcd.split(' ');
        const count = Number(words[0]);
        const bag = `${words[1]} ${words[2]}`;
        return [count, bag];
      });

      bagContentsMap.set(containerBag, parsedBagContents);
    }
  }

  const computeBagCount = (bagColor: string): number => {
    let bagContentCount = bagContentCountMap.get(bagColor);
    if (bagContentCount !== undefined) {
      return bagContentCount;
    }

    const bagContents = bagContentsMap.get(bagColor)!;
    bagContentCount = bagContents.reduce((currentCount, bagContentDetails) => {
      return currentCount + bagContentDetails[0] * computeBagCount(bagContentDetails[1]);
    }, 1);
    bagContentCountMap.set(bagColor, bagContentCount);
    return bagContentCount;
  }

  return computeBagCount(wanted) - 1;
}

export { getBagCountContainingWantedBag, computeNumBagsInBag };