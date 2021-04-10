const rating = (aDriver) => {
  return aDriver.numberOfLateDeiveries > 5 ? 2 : 1;
};
