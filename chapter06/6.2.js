const rating = (aDriver) => {
  return aDriver.numverOfLateDeliveries > 5 ? 2 : 1;
};
