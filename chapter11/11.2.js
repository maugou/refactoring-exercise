const baseCharge = (usage) => {
  if (usage < 0) return usd(0);
  const amount =
    bottomBand(usage) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    topBand(usage) * 0.07;

  return usd(amount);
};

const bottomBand = (usage) => {
  return Math.min(usage, 100);
};

const withinBand = (usage, bottom, top) => {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
};

const topBand = (usage) => {
  return usage > 200 ? usage - 200 : 0;
};
