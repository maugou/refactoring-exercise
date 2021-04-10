const rating = (aDriver) => {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
};

const moreThanFiveLateDeliveries = (dvr) => {
  return dvr.numverOfLateDeliveries > 5;
};
