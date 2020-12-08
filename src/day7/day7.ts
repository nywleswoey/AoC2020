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

export { getBagCountContainingWantedBag };