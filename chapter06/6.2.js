const rating = (aDriver) => {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
};

const moreThanFiveLateDliveries = (aDriver) => {
  return aDriver.numberOfLateDeiveries > 5;
};
