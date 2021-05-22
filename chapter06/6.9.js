reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const aReading = acquireReading();
const baseCharge = baserate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트 2
const aReading = acquireReading();
const baseCharge = baserate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트 3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

const calculateBaseCharge = (aReading) => {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
};
