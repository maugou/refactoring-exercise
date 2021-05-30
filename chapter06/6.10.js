reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// 클라이언트 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

// 클라이언트 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// 입력 객체를 그대로 복사해 반환하는 변환 함수
const enrichReading = (original) => {
  // cloneDeep()는 lodash에서 제공해주는 함수
  const result = cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
};
