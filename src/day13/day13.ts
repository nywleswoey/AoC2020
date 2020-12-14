const productBusIDAndWaitTime = (arrivalTime: number, buses: number[]) => {
  let earliestTime = 10000000000;
  let bestBus = 0;
  for (const bus of buses) {
    const earliestTime2 = (Math.floor(arrivalTime / bus) + 1) * bus;
    if (earliestTime2 < earliestTime) {
      earliestTime = earliestTime2;
      bestBus = bus;
    }
  }

  return (earliestTime - arrivalTime) * bestBus
}

export { productBusIDAndWaitTime };